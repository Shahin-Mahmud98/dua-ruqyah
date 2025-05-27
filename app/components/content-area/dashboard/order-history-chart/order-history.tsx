// import { ChartCard1, XaxisData, YaxisData } from "@/app/components/card-chart";
// import { Key } from "lucide-react";


// type ChartData = {xAxisData:XaxisData, yAxisData:YaxisData};


// export default function ChartCardArea(){
//     const chartData:ChartData={
//         xAxisData:{
//             Key:"month",
//             values:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//             formatter:(value:string)=>value.slice(0, 3) // Format to first 3 letters

//         },
//         yAxisData:[
//             {
//                 key:"desktop",
//                 label:"Desktop",
//                 color:"blue",
//                 opacity:"25%",
//                 values:[120, 130, 80, 73, 209, 214]
//             },
//             {
//                 key:"mobile",
//                 label:"Mobile",
//                 color:"blue",
//                 opacity:"25%",
//                 values:[90, 100, 60, 50, 180, 190]
//             }
//         ]
//     }
//     return(
//         <div className="mt-5">
//             <ChartCard1
//             title="Order History"
//             description="Orders placed in the last 6 months"
//             className="flex-1 border-none shadow-none p-2"
//             chartCustomSize={360}
//             xAxisData={chartData.xAxisData}
//             yAxisData={chartData.yAxisData}
//             showChartLegend={true}
//             footerText={{
//                 title:"Data updated daily",
//                 subTitle:"Excluding canceled orders",
//             }}
//             />
//         </div>
//     );
// }
