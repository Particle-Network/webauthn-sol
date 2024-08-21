require('dotenv').config();
import { HardhatUserConfig } from "hardhat/config";
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-verify';
import "hardhat-deploy";

import {
  ArbitrumSepolia,
  BaseSepolia,
  OptimismSepolia,
  EthereumSepolia,
  LineaSepolia,
  BlastSepolia,
  PolygonAmoy,
  BerachainbArtio,
  BitlayerTestnet,
  ComboTestnet,
  MerlinTestnet,
  XterioBNBTestnet,
  opBNBTestnet,
  BSquaredTestnet,
  opBNB,
  BNBChainTestnet,
  TaikoHekla
} from '@particle-network/chains';

import { getParticleRpc } from "./scripts/hardhat/utils/getParticleNode";


const hardhatAccounts: any[] = [process.env.PRIVATE_KEY];

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.24',
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000000,
      },
    },
  },
  networks: {
    sepolia: {
      url: getParticleRpc(EthereumSepolia.id),
      accounts: hardhatAccounts,
      chainId: EthereumSepolia.id,
    },
    particleTestnet: {
      url: getParticleRpc(2011),
      accounts: hardhatAccounts,
      chainId: 2011,
    },
    arbitrumSepolia: {
      url: getParticleRpc(ArbitrumSepolia.id),
      accounts: hardhatAccounts,
      chainId: ArbitrumSepolia.id,
    },
    optimismSepolia: {
      url: getParticleRpc(OptimismSepolia.id),
      accounts: hardhatAccounts,
      chainId: OptimismSepolia.id,
    },
    baseSepolia: {
      url: getParticleRpc(BaseSepolia.id),
      accounts: hardhatAccounts,
      chainId: BaseSepolia.id,
    },
    lineaSepolia: {
      url: getParticleRpc(LineaSepolia.id),
      accounts: hardhatAccounts,
      chainId: LineaSepolia.id,
    },
    blastSepolia: {
      url: getParticleRpc(BlastSepolia.id),
      accounts: hardhatAccounts,
      chainId: BlastSepolia.id,
    },
    polygonAmoySepolia: {
      url: getParticleRpc(PolygonAmoy.id),
      accounts: hardhatAccounts,
      chainId: PolygonAmoy.id,
    },
    opbnbTestnet: {
      url: getParticleRpc(opBNBTestnet.id),
      accounts: hardhatAccounts,
      chainId: opBNBTestnet.id,
    },
    comboTestnet: {
      url: getParticleRpc(ComboTestnet.id),
      accounts: hardhatAccounts,
      chainId: ComboTestnet.id,
    },
    berabArtio: {
      url: getParticleRpc(BerachainbArtio.id),
      accounts: hardhatAccounts,
      chainId: BerachainbArtio.id,
      gasPrice: 20000000000,
    },
    xterioTestnet: {
      url: getParticleRpc(XterioBNBTestnet.id),
      accounts: hardhatAccounts,
      chainId: XterioBNBTestnet.id,
    },
    seiTestnet: {
      url: "https://evm-rpc-testnet.sei-apis.com",
      accounts: hardhatAccounts,
      chainId: 1328,
    },
    merlinTestnet: {
      url: getParticleRpc(MerlinTestnet.id),
      accounts: hardhatAccounts,
      chainId: MerlinTestnet.id,
    },
    bitlayerTestnet: {
      url: getParticleRpc(BitlayerTestnet.id),
      accounts: hardhatAccounts,
      chainId: BitlayerTestnet.id,
    },
    bsquaredTestnet: {
      url: getParticleRpc(BSquaredTestnet.id),
      accounts: hardhatAccounts,
      chainId: BSquaredTestnet.id,
      gasPrice: 2000000000,
    },
    bnbTestnet: {
      url: getParticleRpc(BNBChainTestnet.id),
      accounts: hardhatAccounts,
      chainId: BNBChainTestnet.id,
      gasPrice: 2000000000,
    },
    particleTestnetV2: {
      url: "https://chain-testnet-v2-public.particle.network",
      accounts: hardhatAccounts,
      chainId: 2012,
    },
    particleTestnetV3: {
      url: "http://34.82.165.211:8545",
      accounts: hardhatAccounts,
      chainId: 2013,
    },
    taikoHekla: {
      url: "https://rpc.hekla.taiko.xyz",
      accounts: hardhatAccounts,
      chainId: TaikoHekla.id,
    },
    zircuitTestnet: {
      url: "https://zircuit1.p2pify.com/",
      accounts: hardhatAccounts,
      chainId: 48899,
    },
    kakarotTestnet: {
      url: "https://sepolia-rpc.kakarot.org/",
      accounts: hardhatAccounts,
      chainId: 1802203764,
    },

  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHEREUM_API_KEY as string,
      baseSepolia: process.env.BASE_API_KEY as string,
    },
    customChains: [
      {
        network: "sepolia",
        chainId: EthereumSepolia.id,
        urls: {
          apiURL: "https://api-sepolia.etherscan.io/api",
          browserURL: "https://sepolia.etherscan.io",
        }
      },
      {
        network: "baseSepolia",
        chainId: BaseSepolia.id,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org",
        }
      }
    ]
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};

export default config;
