import HalfStar from "../assets/icons/half-star.svg";
import EmptyStar from "../assets/icons/empty-star.svg";
import FullStar from "../assets/icons/full-star.svg";

export default function Stars(score) {
  if (score === 0.5)
    return (
      <>
        <img src={HalfStar} />
        <img src={EmptyStar} />
        <img src={EmptyStar} />
        <img src={EmptyStar} />
        <img src={EmptyStar} />
      </>
    );
  if (score === 1)
    return (
      <>
        <img src={FullStar} />
        <img src={EmptyStar} />
        <img src={EmptyStar} />
        <img src={EmptyStar} />
        <img src={EmptyStar} />
      </>
    );
  if (score === 1.5)
    return (
      <>
        <img src={FullStar} />
        <img src={HalfStar} />
        <img src={EmptyStar} />
        <img src={EmptyStar} />
        <img src={EmptyStar} />
      </>
    );
  if (score === 2)
    return (
      <>
        <img src={FullStar} />
        <img src={FullStar} />
        <img src={EmptyStar} />
        <img src={EmptyStar} />
        <img src={EmptyStar} />
      </>
    );
  if (score === 2.5)
    return (
      <>
        <img src={FullStar} />
        <img src={FullStar} />
        <img src={HalfStar} />
        <img src={EmptyStar} />
        <img src={EmptyStar} />
      </>
    );
  if (score === 3)
    return (
      <>
        <img src={FullStar} />
        <img src={FullStar} />
        <img src={FullStar} />
        <img src={EmptyStar} />
        <img src={EmptyStar} />
      </>
    );
  if (score === 3.5)
    return (
      <>
        <img src={FullStar} />
        <img src={FullStar} />
        <img src={FullStar} />
        <img src={HalfStar} />
        <img src={EmptyStar} />
      </>
    );
  if (score === 4)
    return (
      <>
        <img src={FullStar} />
        <img src={FullStar} />
        <img src={FullStar} />
        <img src={FullStar} />
        <img src={EmptyStar} />
      </>
    );
  if (score === 4.5)
    return (
      <>
        <img src={FullStar} />
        <img src={FullStar} />
        <img src={FullStar} />
        <img src={FullStar} />
        <img src={HalfStar} />
      </>
    );
  if (score === 5)
    return (
      <>
        <img src={FullStar} />
        <img src={FullStar} />
        <img src={FullStar} />
        <img src={FullStar} />
        <img src={FullStar} />
      </>
    );
}
