import { defineField, defineType } from "sanity";

export default defineType({
  name: "meetup",
  title: "Meetup",
  type: "document",
  fields: [
    defineField({
      name: "meetupDate",
      title: "Meetup Date",
      type: "date",
      options: {
        dateFormat: "MMMM D YYYY",
      },
      description:
        "Select meetup date. Date will be used for sorting all meetups.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Generate after Meetup Date is selected, DO NOT MODIFY AFTER",
      validation: (Rule) => Rule.required(),
      options: {
        source: "meetupDate",
        maxLength: 96,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-"),
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Use Meetup Date as title ex(February 13 2023)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Flyer image",
      type: "cloudinary.asset",
      name: "image",
      description: "Main flyer image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Meetup Photos",
      type: "array",
      name: "cloudinaryList",
      description: "Additional photos",
      of: [{ type: "cloudinary.asset" }],
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      description: "Any additional text regarding the meetup",
    }),
  ],

  // preview title, author, and flyer image in Meetup List
  preview: {
    select: {
      title: "title",
      author: "author.name",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
