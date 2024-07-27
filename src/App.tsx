import "../app/globals.css";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProblemOne from "./problems/ProblemOne";
import ProblemThree from "./problems/ProblemThree";
import ProblemTwo from "./problems/ProblemTwo";

function App() {
  return (
    <section className="h-full bg-slate-300">
      <div className="container">
        <div className="flex justify-center py-12">
          <Tabs defaultValue="p-1" className="w-[800px]">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="p-1">Problem 1</TabsTrigger>
              <TabsTrigger value="p-2">Problem 2</TabsTrigger>
              <TabsTrigger value="p-3">Problem 3</TabsTrigger>
            </TabsList>
            <TabsContent value="p-1">
              <Card>
                <ProblemOne />
              </Card>
            </TabsContent>
            <TabsContent value="p-2">
              <Card>
                <ProblemTwo />
              </Card>
            </TabsContent>
            <TabsContent value="p-3">
              <Card>
                <ProblemThree />
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default App;
