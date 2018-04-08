import songAddedSubscription from './songSubscriptions';

export default (client) => {
  client.subscribe({
    query: songAddedSubscription,
  }).subscribe({
    next: data => console.log('subscription fired!', data),
  });
};

