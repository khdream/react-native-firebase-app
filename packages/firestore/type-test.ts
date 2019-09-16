import firebase from '@react-native-firebase/app';
import * as firestore from '@react-native-firebase/firestore';

// checks module exists at root
console.log(firebase.firestore().app.name);

// checks module exists at app level
console.log(firebase.app().firestore().app.name);
console.log(
  firebase
    .app()
    .firestore()
    .collection('foo'),
);

// checks statics exist
console.log(firebase.firestore.SDK_VERSION);

// checks statics exist on defaultExport
console.log(firestore.firebase.SDK_VERSION);

// checks root exists
console.log(firebase.SDK_VERSION);

// checks firebase named export exists on module
console.log(firestore.firebase.SDK_VERSION);

// TODO
// // checks multi-app support exists
// console.log(firestore.firebase(firebase.app()).app.name);
//
// // checks default export supports app arg
// console.log(firestore.firebase(firebase.app('foo')).app.name);

console.log(firestore.Blob);
console.log(firestore.FieldPath);
console.log(firestore.FieldValue);
console.log(firestore.GeoPoint);
console.log(firestore.Timestamp);
console.log(firestore.CACHE_SIZE_UNLIMITED);
firebase.firestore.setLogLevel('debug');

firebase.firestore().collection('foo');
firebase
  .firestore()
  .collection('foo')
  .doc('foo')
  .collection('foo');
firebase
  .firestore()
  .collection('foo')
  .doc('foo');
firebase
  .firestore()
  .collection('foo')
  .doc('foo')
  .collection('foo')
  .add({ foo: 'bar' })
  .then();
firebase
  .firestore()
  .collection('foo')
  .doc('foo')
  .update({ foo: 'bar' })
  .then();
firebase
  .firestore()
  .collectionGroup('foo')
  .endAt(123)
  .startAfter(123)
  .get({ source: 'cache' })
  .then();
firebase
  .firestore()
  .collection('foo')
  .doc('foo')
  .onSnapshot(() => {});
firebase
  .firestore()
  .collection('foo')
  .doc('foo')
  .onSnapshot({
    next: snapshot => {
      console.log(snapshot.get('foo'));
    },
    error: error => {
      console.log(error.message);
    },
  });
firebase
  .firestore()
  .collection('foo')
  .doc('foo')
  .onSnapshot(
    {
      includeMetadataChanges: true,
    },
    {
      next: snapshot => {
        console.log(snapshot.get('foo'));
      },
      error: error => {
        console.log(error.message);
      },
      complete() {},
    },
  );
firebase
  .firestore()
  .collection('foo')
  .doc('foo')
  .onSnapshot(
    snapshot => {
      console.log(snapshot.get('foo'));
    },
    error => {
      console.log(error.message);
    },
    () => {},
  );
firebase
  .firestore()
  .collection('foo')
  .onSnapshot(
    {
      includeMetadataChanges: true,
    },
    {
      next: snapshot => {
        console.log(snapshot.docs);
      },
      error: error => {
        console.log(error.message);
      },
      complete() {},
    },
  );
