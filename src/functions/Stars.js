import HalfStar from "../assets/icons/half-star.svg";
import EmptyStar from "../assets/icons/empty-star.svg";
import FullStar from "../assets/icons/full-star.svg";

export default function Stars(score) {
  if (score === 0)
    return (
      <>
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
      </>
    );
  if (score === 0.5)
    return (
      <>
        <img src={HalfStar} alt="Half Star" />
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
      </>
    );
  if (score === 1)
    return (
      <>
        <img src={FullStar} alt="Full Star" />
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
      </>
    );
  if (score === 1.5)
    return (
      <>
        <img src={FullStar} alt="Full Star" />
        <img src={HalfStar} alt="Half Star" />
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
      </>
    );
  if (score === 2)
    return (
      <>
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
      </>
    );
  if (score === 2.5)
    return (
      <>
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
        <img src={HalfStar} alt="Half Star" />
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
      </>
    );
  if (score === 3)
    return (
      <>
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
        <img src={EmptyStar} alt="Empty Star" />
        <img src={EmptyStar} alt="Empty Star" />
      </>
    );
  if (score === 3.5)
    return (
      <>
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
        <img src={HalfStar} alt="Half Star" />
        <img src={EmptyStar} alt="Empty Star" />
      </>
    );
  if (score === 4)
    return (
      <>
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
        <img src={EmptyStar} alt="Empty Star" />
      </>
    );
  if (score === 4.5)
    return (
      <>
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
        <img src={HalfStar} alt="Half Star" />
      </>
    );
  if (score === 5)
    return (
      <>
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
        <img src={FullStar} alt="Full Star" />
      </>
    );
}
