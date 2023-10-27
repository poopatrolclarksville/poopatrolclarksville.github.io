import * as path from "path"
 
export const onCreateWebpackConfig = (
  { actions }: { actions: any }
) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        // "@/utils": path.resolve(__dirname, "src/lib/utils.ts"),
        "@/types": path.resolve(__dirname, "src/lib/types.ts"),
        "@/schemas": path.resolve(__dirname, "src/lib/schemas"),
        "@/config": path.resolve(__dirname, "src/config"),
        "@/styles": path.resolve(__dirname, "src/styles"),
        "@/sections": path.resolve(__dirname, "src/sections"),
      },
    },
  })
}