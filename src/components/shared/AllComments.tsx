import { getComments } from '@/lib/actions/comment.action';
import { getTimestamp } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from './Pagination';
import ParseHTML from './ParseHTML';
import Votes from './Votes';

interface Props {
  productId: string;
  userId: string;
  totalComments: number;
  page?: number;
  filter?: string;
}

const AllComments = async ({
  productId,
  userId,
  totalComments,
  page,
  filter,
}: Props) => {
  const result = await getComments({
    productId,
    page: page ? +page : 1,
    sortBy: filter,
  });

  return (
    <div className="mt-11">
      <div className="flex items-center justify-between">
        <h3 className="primary-text-gradient">{totalComments} Answers</h3>

        {/* <Filter filters={totalComments} /> */}
      </div>

      <div>
        {result.comments.map((comment) => (
          <article key={comment._id} className="light-border border-b py-10">
            <div className="mb-8 flex flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
              <Link
                href={`/profile/${comment.author.clerkId}`}
                className="flex flex-1  gap-1.5 items-center"
              >
                <Image
                  src={comment.author.photo}
                  width={100}
                  height={100}
                  alt="profile"
                  className="h-10 w-10 rounded-full object-cover max-sm:mt-0.5"
                />
                <div className="flex flex-col">
                  <p className="text-base capitalize paragraph font-semibold">
                    {comment.author.username}
                  </p>

                  <p className="text-sm paragraph">
                    commented {getTimestamp(comment.createdAt)}
                  </p>
                </div>
              </Link>
              <div className="flex justify-end">
                <Votes
                  type="Comment"
                  itemId={JSON.stringify(comment._id)}
                  userId={JSON.stringify(userId)}
                  upvotes={comment.upvotes.length}
                  hasupVoted={comment.upvotes.includes(userId)}
                  downvotes={comment.downvotes.length}
                  hasdownVoted={comment.downvotes.includes(userId)}
                />
              </div>
            </div>
            <ParseHTML data={comment.content} />
          </article>
        ))}
      </div>

      <div className="mt-10 w-full">
        <Pagination
          pageNumber={page ? +page : 1}
          isNext={result.isNextAnswer}
        />
      </div>
    </div>
  );
};

export default AllComments;
