
import { chains } from "@particle-network/chains";

export function getParticleRpc(chainId: number): string {
    const projectId = process.env.PARTCLE_PROJECT_ID as string;
    const clientKey = process.env.PARTCLE_CLIENT_KEY as string;
    return chains.getParticleNode(chainId, projectId, clientKey)
}