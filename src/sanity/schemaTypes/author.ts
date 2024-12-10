import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description:
        "Name that will be displayed on About page and meetup uploads/edits",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Do not edit this section",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      title: "Author Image",
      type: "cloudinary.asset",
      name: "image",
      description: "Image to be used in About Us page",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      description: "Can be edited / updated at any time",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
