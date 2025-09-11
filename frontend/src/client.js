
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
 projectId: 'n8133w6i',
 dataset: 'production',
 apiVersion: '2024-02-01',
 useCdn: true,
 token: 'sk5LNIA5TRjGQqhYiP2D2elI1VNTyQvjWlb3KL52ZlOosDQYmumGStOmTsDbSqxVhn8ryUm1a9WY30dG46wFBUbqSlPcMDII1BzyuPHQq1x6E0UILFs24VQK56LXtnmcCJhkAojiK2qqlWC4236uz86rjcVDynFbFBF9fNlpOGcu3aQVBUqI',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

