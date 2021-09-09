/// <reference types="react" />
import { useNFTType, useNFTMetadataType } from "@htsoft/reactjs-hooks";
export declare type NFTDataProviderProps = {
    id: string;
    contract?: string;
    useBetaIndexer?: boolean;
    refreshInterval?: number;
    children: React.ReactNode;
    initialData?: {
        nft?: useNFTType["data"];
        metadata?: useNFTMetadataType["metadata"];
    } | any;
};
export declare const NFTDataProvider: ({ id, children, contract, refreshInterval, initialData, useBetaIndexer, }: NFTDataProviderProps) => JSX.Element;
