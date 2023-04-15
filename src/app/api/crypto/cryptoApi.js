import axios from 'axios';

// export const api = axios.create({
//   baseURL: 'https://rest.coinapi.io/',
//   headers: {
//     'X-CoinAPI-Key': '38AFBCC5-AC38-4EB4-8451-F396BCFF6CB5',
//   },
// });

// export async function getCryptos() {
// const response = await api.get(
//   'v1/assets/BTC,DOGE,ETH,BNB,XRP,ADA,MATIC,SOL,DOGE,DOT,LTC',
//   {
//     params: {
//       type_is_crypto: 1,
//       limit: 10,
//     },
//   },
// );
// const data = response.data;
// data.length = 10;
// return data;
// }

export const api = axios.create({
  baseURL: 'http://localhost:4000',
});

export async function getCryptos() {
  const response = await api.get('cryptos');
  const data = response.data;
  data.length = 10;
  return data;
}

export async function signUp(user) {
  const response = await api.post('users', {
    ...user,
    cryptoWallet: [],
    currentMoney: 32256.56,
  });
  const data = response.data;
  return data;
}

export async function signIn(user) {
  const response = await api.post('login', user);
  const data = response.data;
  return data;
}

export async function getUser(userID) {
  const response = await api.get('users', userID);
  const data = response.data;
  return data;
}

export async function getCrypto(crypto_id) {
  const response = await api.get('cryptos');
  const data = response.data.filter((crypto) => {
    return crypto.asset_id === crypto_id;
  });
  return data;
}

export async function addCrypto(crypto) {
  let currentUser = await getUser(localStorage.getItem('user'));
  currentUser = currentUser[0];
  if (
    currentUser.cryptoWallet.filter((cryptoItem) => {
      return cryptoItem.asset_id === crypto.asset_id;
    }).length === 0
  ) {
    currentUser.cryptoWallet = [...currentUser.cryptoWallet, crypto];
    const response = await api.put(
      `users/${localStorage.getItem('user')}`,
      currentUser,
    );
    const data = response.data;
    return data;
  } else {
    return;
  }
}

export async function transferCrypto(crypto) {
  let currentUser = await getUser(localStorage.getItem('user'));
  currentUser = currentUser[0];
  currentUser.cryptoWallet.forEach(async (cryptoItem, index) => {
    if (
      cryptoItem.asset_id === crypto.asset_id &&
      crypto.transaction === 'Transfer in'
    ) {
      cryptoItem.amount =
        parseFloat(cryptoItem.amount) + parseFloat(crypto.transactionAmount);
      return;
    } else if (
      parseFloat(cryptoItem.amount) > parseFloat(crypto.transactionAmount)
    ) {
      cryptoItem.amount =
        parseFloat(cryptoItem.amount) - parseFloat(crypto.transactionAmount);
      return;
    } else if (
      parseFloat(cryptoItem.amount) === parseFloat(crypto.transactionAmount)
    ) {
      currentUser.cryptoWallet.pop(index);
      return;
    } else {
      return;
    }
  });
  const response = await api.put(
    `users/${localStorage.getItem('user')}`,
    currentUser,
  );
  const data = response.data;
  return data;
}
