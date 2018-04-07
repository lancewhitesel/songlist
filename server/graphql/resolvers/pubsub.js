import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

const subscribe = topic => pubsub.asyncIterator(topic);
const publish = (topic, payload) => pubsub.publish(topic, payload);

export default {
  subscribe,
  publish,
};