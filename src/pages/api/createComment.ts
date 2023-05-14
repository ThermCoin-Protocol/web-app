import { sanityClient } from "../../../sanity";

export default async function createComment(req: any, res: any) {
  const { name, comment, _id } = JSON.parse(req.body);
  console.log(name, comment, _id);

  sanityClient.config({
    token: process.env.SANITY_COMMENT_API_TOKEN,
  });
  const result = await sanityClient.create({
    _type: "comment",
    name,
    comment,
    post: {
      _type: "reference",
      _ref: _id,
    },
  });
  console.log(result);
  res.json({ name, comment, _id });
}