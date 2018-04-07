import songAddedSubscription from './songSubscriptions';

export default (client) => {
  const c = client.subscribe({
    query: songAddedSubscription,
  }).subscribe({
    next: data => console.log('subscription fired!', data),
  });
};

