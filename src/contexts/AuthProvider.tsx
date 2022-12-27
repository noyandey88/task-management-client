import React, {
  ReactNode,
  useEffect,
  useState,
  useContext,
  createContext,
} from 'react'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import {
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { app } from '../firebase/firebase.config'

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export interface AuthProviderProps {
  children?: ReactNode
}

export interface UserContextState {
  isAuthenticated: boolean
  isLoading: boolean
  id?: string
}

export const UserStateContext = createContext<UserContextState>(
  {} as UserContextState,
)
export interface AuthContextModel {
  auth: Auth
  user: User | null
  createUser: (email: string, password: string) => Promise<UserCredential>
  loginUser: (email: string, password: string) => Promise<UserCredential>
  googleSignIn: () => Promise<UserCredential>
  logOut: () => Promise<void>
}

export const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel,
)

export function useAuth(): AuthContextModel {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const createUser = (email: string, password: string): Promise<UserCredential> => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email: string, password: string): Promise<UserCredential> => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = (): Promise<UserCredential> => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = (): Promise<void> => {
    setLoading(true);
    return signOut(auth);
  };

  // const updateUserProfile = (name: string, photo: string) => {
  //   return updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photo,
  //   });
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [])

  const authInfo = {
    createUser,
    loginUser,
    googleSignIn,
    logOut,
    user,
    loading,
    setLoading,
    auth
  }

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}

export const useUserContext = (): UserContextState => {
  return useContext(UserStateContext)
}