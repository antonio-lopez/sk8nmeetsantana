import { defineField, defineType } from "sanity";

export default defineType({
  name: "highlights",
  title: "Highlights",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description:
        "DO NOT REMOVE OR UPDATE TITLE. THIS DOCUMENT IS USED TO UPDATE ONLY PHOTOS FOR THE HOME PAGE / EMPTY MEETUPS.",
    }),
    defineField({
      title: "Highlights of Meetups",
      type: "array",
      name: "cloudinaryList",
      description:
        "Pick and choose photos you want to display in the bottom of the homescreen (Minimum / Maximum of 5 photos)",
      of: [{ type: "cloudinary.asset" }],
    }),
  ],
});
