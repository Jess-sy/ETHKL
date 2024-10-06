/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface LuxuryProductMarketplaceInterface extends utils.Interface {
  functions: {
    "addProduct(string,uint256,bytes32)": FunctionFragment;
    "buyProduct(uint256,bytes32)": FunctionFragment;
    "createCertHash(string,string,string,uint256)": FunctionFragment;
    "platformOwner()": FunctionFragment;
    "productCount()": FunctionFragment;
    "products(uint256)": FunctionFragment;
    "showCertHash(uint256)": FunctionFragment;
    "verifyCertificate(uint256,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addProduct"
      | "buyProduct"
      | "createCertHash"
      | "platformOwner"
      | "productCount"
      | "products"
      | "showCertHash"
      | "verifyCertificate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addProduct",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buyProduct",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "createCertHash",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "platformOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "productCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "products",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "showCertHash",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyCertificate",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "addProduct", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyProduct", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createCertHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "platformOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "productCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "products", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "showCertHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyCertificate",
    data: BytesLike
  ): Result;

  events: {
    "CertHashCreated(bytes32)": EventFragment;
    "ProductAdded(uint256,string,uint256,address,bytes32)": EventFragment;
    "ProductBought(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CertHashCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProductAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProductBought"): EventFragment;
}

export interface CertHashCreatedEventObject {
  certHash: string;
}
export type CertHashCreatedEvent = TypedEvent<
  [string],
  CertHashCreatedEventObject
>;

export type CertHashCreatedEventFilter = TypedEventFilter<CertHashCreatedEvent>;

export interface ProductAddedEventObject {
  id: BigNumber;
  name: string;
  price: BigNumber;
  seller: string;
  certHash: string;
}
export type ProductAddedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string, string],
  ProductAddedEventObject
>;

export type ProductAddedEventFilter = TypedEventFilter<ProductAddedEvent>;

export interface ProductBoughtEventObject {
  id: BigNumber;
  buyer: string;
  price: BigNumber;
}
export type ProductBoughtEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  ProductBoughtEventObject
>;

export type ProductBoughtEventFilter = TypedEventFilter<ProductBoughtEvent>;

export interface LuxuryProductMarketplace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LuxuryProductMarketplaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addProduct(
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _certHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    buyProduct(
      _productId: PromiseOrValue<BigNumberish>,
      _certHash: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createCertHash(
      _productName: PromiseOrValue<string>,
      _serialNumber: PromiseOrValue<string>,
      _manufacturer: PromiseOrValue<string>,
      _issueDate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    platformOwner(overrides?: CallOverrides): Promise<[string]>;

    productCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    products(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, string, string, boolean] & {
        id: BigNumber;
        name: string;
        price: BigNumber;
        seller: string;
        certHash: string;
        isSold: boolean;
      }
    >;

    showCertHash(
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    verifyCertificate(
      _productId: PromiseOrValue<BigNumberish>,
      _certHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addProduct(
    _name: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _certHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  buyProduct(
    _productId: PromiseOrValue<BigNumberish>,
    _certHash: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createCertHash(
    _productName: PromiseOrValue<string>,
    _serialNumber: PromiseOrValue<string>,
    _manufacturer: PromiseOrValue<string>,
    _issueDate: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  platformOwner(overrides?: CallOverrides): Promise<string>;

  productCount(overrides?: CallOverrides): Promise<BigNumber>;

  products(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, string, string, boolean] & {
      id: BigNumber;
      name: string;
      price: BigNumber;
      seller: string;
      certHash: string;
      isSold: boolean;
    }
  >;

  showCertHash(
    _productId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  verifyCertificate(
    _productId: PromiseOrValue<BigNumberish>,
    _certHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addProduct(
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _certHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    buyProduct(
      _productId: PromiseOrValue<BigNumberish>,
      _certHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    createCertHash(
      _productName: PromiseOrValue<string>,
      _serialNumber: PromiseOrValue<string>,
      _manufacturer: PromiseOrValue<string>,
      _issueDate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    platformOwner(overrides?: CallOverrides): Promise<string>;

    productCount(overrides?: CallOverrides): Promise<BigNumber>;

    products(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, string, string, boolean] & {
        id: BigNumber;
        name: string;
        price: BigNumber;
        seller: string;
        certHash: string;
        isSold: boolean;
      }
    >;

    showCertHash(
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    verifyCertificate(
      _productId: PromiseOrValue<BigNumberish>,
      _certHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "CertHashCreated(bytes32)"(certHash?: null): CertHashCreatedEventFilter;
    CertHashCreated(certHash?: null): CertHashCreatedEventFilter;

    "ProductAdded(uint256,string,uint256,address,bytes32)"(
      id?: null,
      name?: null,
      price?: null,
      seller?: null,
      certHash?: null
    ): ProductAddedEventFilter;
    ProductAdded(
      id?: null,
      name?: null,
      price?: null,
      seller?: null,
      certHash?: null
    ): ProductAddedEventFilter;

    "ProductBought(uint256,address,uint256)"(
      id?: null,
      buyer?: null,
      price?: null
    ): ProductBoughtEventFilter;
    ProductBought(
      id?: null,
      buyer?: null,
      price?: null
    ): ProductBoughtEventFilter;
  };

  estimateGas: {
    addProduct(
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _certHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    buyProduct(
      _productId: PromiseOrValue<BigNumberish>,
      _certHash: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createCertHash(
      _productName: PromiseOrValue<string>,
      _serialNumber: PromiseOrValue<string>,
      _manufacturer: PromiseOrValue<string>,
      _issueDate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    platformOwner(overrides?: CallOverrides): Promise<BigNumber>;

    productCount(overrides?: CallOverrides): Promise<BigNumber>;

    products(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    showCertHash(
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyCertificate(
      _productId: PromiseOrValue<BigNumberish>,
      _certHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addProduct(
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _certHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    buyProduct(
      _productId: PromiseOrValue<BigNumberish>,
      _certHash: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createCertHash(
      _productName: PromiseOrValue<string>,
      _serialNumber: PromiseOrValue<string>,
      _manufacturer: PromiseOrValue<string>,
      _issueDate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    platformOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    productCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    products(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    showCertHash(
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyCertificate(
      _productId: PromiseOrValue<BigNumberish>,
      _certHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
