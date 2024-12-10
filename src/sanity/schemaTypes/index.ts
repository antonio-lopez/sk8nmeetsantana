import type { SchemaTypeDefinition } from "sanity";
import author from "./author";
import meetup from "./meetup";
import highlights from "./highlights";
import blockContent from "./blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, meetup, highlights, blockContent],
};
