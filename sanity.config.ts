import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";
import { cloudinarySchemaPlugin } from "sanity-plugin-cloudinary";

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  // @ts-ignore: Unreachable code error
  plugins: [structureTool(), cloudinarySchemaPlugin()],
  schema,
});
