import { info } from "@actions/core";
import { downloadTool, extractZip } from "@actions/tool-cache";

const arch = "Linux-x86_64";

export async function downloadFile(version: string): Promise<string> {
  const binaryUrl = version === "latest" ?
    `https://github.com/iggy-rs/iggy/releases/latest/download/${arch}.zip` :
    `https://github.com/iggy-rs/iggy/releases/download/server-${version}/${arch}.zip`;

  info(`Binary downloaded from ${binaryUrl}`);

  const pathToTarball = await downloadTool(binaryUrl);
  const pathToCLI = await extractZip(pathToTarball);

  return pathToCLI + `/all_artifacts/${arch}`;
}
