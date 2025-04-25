import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartPie, DollarSign, Receipt, Users } from "lucide-react";

export default async function FareEvasion() {
  return (
    <div className="min-h-screen mx-auto max-w-screen-xl w-full font-mono py-10">
      <h1 className="text-2xl w-full text-center font-bold mb-8">
        Fare Evasion Enforcement on Muni
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium">Total Citations</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">384,215</div>
            <p className="text-xs text-muted-foreground">Issued since 2010</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium">Total Fines</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$42,679,555</div>
            <p className="text-xs text-muted-foreground">
              Value of all citations
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium">Citations with Fines</CardTitle>
            <ChartPie className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95%</div>
            <p className="text-xs text-muted-foreground">
              Resulted in monetary penalty
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium">Largest Fine</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,100</div>
            <p className="text-xs text-muted-foreground">
              Issued on January 12, 2018
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
