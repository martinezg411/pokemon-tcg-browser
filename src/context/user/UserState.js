import { useReducer } from 'react';
import UserContext from './UserContext';
import UserReducer from './UserReducer';

import firebase, { db, auth, provider } from '../../config/firebase.js';

const UserState = (props) => {
  const initialState = {
    user: null,
    collection: {},
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsersCollection = async (userId) => {
    try {
      const result = await db.collection('UserCollections').doc(userId).get();
      if (result.exists) {
        const data = result.data();
        return data;
      } else {
        return {};
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const getUserOnMount = () => {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject('User not authenticated');
        }
      });
    });
  };

  const checkAuthenticationOnMount = async () => {
    try {
      const user = await getUserOnMount();
      const collection = await getUsersCollection(user.uid);
      dispatch({ type: 'LOGIN', payload: user });
      dispatch({ type: 'SET_COLLECTION', payload: collection });
    } catch {
      dispatch({ type: 'LOGOUT' });
    }
  };

  const isUserAuthenticated = () => {
    return state.user !== null && state.user !== undefined;
  };

  const logout = async () => {
    try {
      await auth.signOut();
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      return { type: 'failure', message: error.message };
    }
  };

  const loginWithEmail = async (email, password) => {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const collection = await getUsersCollection(result.user.uid);
      dispatch({ type: 'LOGIN', payload: result.user });
      dispatch({ type: 'SET_COLLECTION', payload: collection });
    } catch (error) {
      dispatch({ type: 'LOGOUT' });
      console.log('Error bitch');
      throw new Error(error.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await auth.signInWithPopup(provider);
      const collection = await getUsersCollection(result.user.uid);
      dispatch({ type: 'LOGIN', payload: result.user });
      dispatch({ type: 'SET_COLLECTION', payload: collection });
    } catch (error) {
      dispatch({ type: 'LOGOUT' });
      throw new Error(error.message);
    }
  };

  const signup = async (email, password) => {
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      dispatch({ type: 'LOGIN', payload: result.user });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Collection manipulation

  const isCardInCollection = (card) => {
    const setId = card.set.id;
    const cardId = card.id;

    return (
      state.collection[setId] !== undefined &&
      state.collection[setId].indexOf(cardId) > -1
    );
  };

  const add = async (card) => {
    const setId = card.set.id;
    const cardId = card.id;
    const name = card.name;
    const setName = card.set.name;

    try {
      const res = await db
        .collection('UserCollections')
        .doc(state.user.uid)
        .set(
          { [setId]: firebase.firestore.FieldValue.arrayUnion(cardId) },
          { merge: true },
        );

      dispatch({
        type: 'ADD_TO_COLLECTION',
        payload: { set: setId, card: cardId },
      });

      return {
        type: 'success',
        message: `Added ${name} from ${setName} to your collection.`,
      };
    } catch (error) {
      return {
        type: 'failure',
        message: `Failed to add card to your collection. ${error.message}`,
      };
    }
  };

  const remove = async (card) => {
    const setId = card.set.id;
    const cardId = card.id;
    const name = card.name;
    const setName = card.set.name;

    try {
      await db
        .collection('UserCollections')
        .doc(state.user.uid)
        .set(
          {
            [setId]: firebase.firestore.FieldValue.arrayRemove(cardId),
          },
          { merge: true },
        );
      dispatch({
        type: 'REMOVE_FROM_COLLECTION',
        payload: { set: setId, card: cardId },
      });
      return {
        type: 'success',
        message: `Removed ${name} from ${setName} from your collection.`,
      };
    } catch (error) {
      return {
        type: 'failure',
        message: `Failed to remove card from collection. ${error.message}`,
      };
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        collection: state.collection,
        checkAuthenticationOnMount,
        loginWithEmail,
        logout,
        signup,
        isUserAuthenticated,
        isCardInCollection,
        loginWithGoogle,
        add,
        remove,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
