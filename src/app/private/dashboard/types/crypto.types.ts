export interface ICrypto {
    crypto_id: string,
    name: string,
    asset: string,
    value: number,
    stock: number,
    icon: string
}

export interface IWallet {
    wallet_id: string,
    user_id: string,
    crypto_id: string,
    amount: number,
    crypto: ICrypto
}