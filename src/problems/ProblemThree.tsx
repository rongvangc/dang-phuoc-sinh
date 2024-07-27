import { CopyBlock, dracula } from "react-code-blocks";
import { ProblemCode3 } from "./CodeBlocks";

const ProblemThree = () => {
  return (
    <div className="p-6 space-y-4">
      <p className="font-bold text-xl">
        List out the computational inefficiencies and anti-patterns found in the
        code block below.
      </p>

      <ul>
        <li>
          <p>
            1. <b>Unnecessary Filtering and Sorting in Render Method:</b> The
            <span className="code-html">sortedBalances</span>
            useMemo hook recalculates whenever{" "}
            <span className="code-html">balances</span> or{" "}
            <span className="code-html">prices</span> change. However,{" "}
            <span className="code-html">prices</span>
            are unused in the filtering and sorting logic, making its inclusion
            in the dependency array unnecessary. This might lead to unnecessary
            recalculations.
          </p>
        </li>
        <li>
          <p>
            2. <b>Improper Use of useMemo Dependency Array: </b> As mentioned
            above, including <span className="code-html">prices</span> in the
            dependency array of <span className="code-html">useMemo</span> for
            <span className="code-html">sortedBalances</span> is unnecessary and
            could lead to performance issues due to extra recalculations.
          </p>
        </li>
        <li>
          <p>
            3. <b>Inefficient Sorting Logic: </b> The sorting logic within
            <span className="code-html">sortedBalances</span> could potentially
            attempt to sort even when it's not needed (e.g., when all priorities
            are equal). This inefficiency can be reduced by first filtering and
            then checking if sorting is necessary.
          </p>
        </li>
        <li>
          <p>
            4. <b>Misuse of map Index as Key in rows:</b> Using the array index
            as a key in React lists{" "}
            <span className="code-html">{`(key={index})`}</span> is generally
            considered an anti-pattern, especially if the list can be reordered,
            which appears to be the case due to sorting. This can lead to
            performance issues and bugs with stateful components.
          </p>
        </li>
        <li>
          <p>
            5. <b>Redundant Mapping (formattedBalances Unused): </b> The
            <span className="code-html">formattedBalances</span> mapping is done
            but never used. It seems the intention was to use it in{" "}
            <span className="code-html">rows</span>, but{" "}
            <span className="code-html">sortedBalances</span> was used instead.
            This results in unnecessary computation.
          </p>
        </li>
        <li>
          <p>
            6. <b>Logical Error in Filtering Condition: </b> The variable
            <span className="code-html">lhsPriority</span> in the filter
            condition seems to be undefined. It looks like there is an error,
            and the intention was to use{" "}
            <span className="code-html">balancePriority</span>.
          </p>
        </li>
        <li>
          <p>
            7. <b>Unnecessary Prop Spreading: </b> The spreading of ...rest into
            the div might lead to unexpected props being passed to the DOM
            element, potentially resulting in invalid HTML attributes or React
            warnings.
          </p>
        </li>
        <li>
          <p>
            7. <b>Type Safety Concerns: </b> The{" "}
            <span className="code-html">getPriority</span> function accepts{" "}
            <span className="code-html">any</span>
            as a parameter type, which is not type-safe. Using a more specific
            type or enumeration for{" "}
            <span className="code-html">blockchain</span> could improve type
            safety.
          </p>
        </li>
      </ul>

      <p className="font-bold text-red-500 text-xl">Refactored Version:</p>

      <CopyBlock text={ProblemCode3} language="jsx" theme={dracula} codeBlock />
    </div>
  );
};

export default ProblemThree;
