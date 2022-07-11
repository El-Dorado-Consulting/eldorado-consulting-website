import { Client } from "@notionhq/client"
import {NotionToMarkdown} from "notion-to-md";

const NOTION_SECRET = process.env.NOTION_SECRET
console.log(NOTION_SECRET)

// Initializing a client
const notion = new Client({
    auth: NOTION_SECRET,
})

const n2m = new NotionToMarkdown({ notionClient: notion });


export async function get({ params }:any ) {
  const slug = params.id
  const[response, mdblocks] = await Promise.all([
    notion.pages.retrieve({page_id:slug}), 
    n2m.pageToMarkdown(slug)
  ]);
  console.log(response)
  const image = response.cover?.external.url
  const title = response.properties?.Name.title[0]?.text?.content
  const date = response.properties?.Date.date.start
  const mdString = await n2m.toMarkdownString(mdblocks);
  console.log(mdString.length)
  if (mdString) {
    return {
      body: {
              mdString,
              image,
              title,
              date
           }
    };
  }
  return {
    status: 404
  };
}