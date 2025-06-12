import { BaseProps } from "@/core/components/typing";
import { StarIcon } from "@heroicons/react/outline";

export interface RatingProps extends BaseProps {
  score: number;
  votes: number;
}

const Rating = (props: RatingProps) => {
  return (
    <div className={`flex items-center gap-1 ${props.className}`}>
      <span>{props.score}</span>
      {Array.from({ length: 5 }).map((_, i) => {
        if (i + 1 <= Math.floor(props.score))
          return (
            <StarIcon
              key={i}
              className="text-blue-600 fill-blue-600 w-4 min-w-4 "
            />
          );
        if (i < props.score)
          return (
            <StarIcon
              key={i}
              className="text-blue-600 fill-blue-600 w-4 min-w-4 "
            />
          );
        return <StarIcon key={i} className="text-gray-300 w-4 min-w-4 " />;
      })}
      <span className="text-gray-500">({props.votes})</span>
    </div>
  );
};

export default Rating;
