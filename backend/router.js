import colorRecommendationPost from './controller/colorRecommendation/post.js'

export default function router(fastify) {
  fastify.post('/', colorRecommendationPost);
}
