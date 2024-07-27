import { CopyBlock, dracula } from "react-code-blocks";
import { Separator } from "../components/ui/separator";
import {
  ProblemCode1Method1,
  ProblemCode1Method2,
  ProblemCode1Method3,
} from "./CodeBlocks";

const ProblemOne = () => {
  return (
    <div className="p-6 space-y-4">
      <p className="font-bold text-xl">
        Provide 3 unique implementations of the following function in
        JavaScript.
      </p>
      <p>
        <b>Input:</b> n - any integer
      </p>
      <p>
        <b>Output:</b> return - summation to n, i.e. sum_to_n(5) === 1 + 2 + 3 +
        4 + 5 === 15.
      </p>
      <h4 className="text-red-500 font-medium">1. Iterative Approach</h4>
      <CopyBlock
        text={ProblemCode1Method1}
        language="js"
        theme={dracula}
        codeBlock
      />
      <Separator />
      <h4 className="text-red-500 font-medium">
        2. Using the Arithmetic Sum Formula
      </h4>
      <CopyBlock
        text={ProblemCode1Method2}
        language="js"
        theme={dracula}
        codeBlock
      />
      <Separator />
      <h4 className="text-red-500 font-medium">3. Recursive Approach</h4>
      <CopyBlock
        text={ProblemCode1Method3}
        language="js"
        theme={dracula}
        codeBlock
      />
    </div>
  );
};

export default ProblemOne;
