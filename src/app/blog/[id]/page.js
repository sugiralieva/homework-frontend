import posts from '../../../../data/data.json';

export default function Page({ params }) {
  const postId = Number(params.id);


  const getPost = (postId, data) => {
    const post = data.find(post => post.id === postId);
    return post ? post : 'No information';
  };

  const postdata = getPost(postId, posts);

 
  return (
    <div className='px-20 pt-10 text-lg'>
        {postdata === 'No information' ? (
        <p>No information available</p>
      ) : (
        <div>
          <p className='text-xl pb-5 text-center font-bold'>{postdata.title}</p>
          <p><strong>Date: </strong>{postdata.date}</p>
          <p><strong>Author: </strong>{postdata.author}</p>
          <p><strong>Title: </strong>{postdata.title}</p>
          <p><strong>Description: </strong>{postdata.description}</p>
        </div>
      )}
    </div>
  );
}
