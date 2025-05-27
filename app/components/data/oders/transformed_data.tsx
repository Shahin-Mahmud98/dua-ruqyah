// import { FaCcMastercard } from "react-icons/fa";
// // Import or define the Order type
// import type { Order } from "../../../types/order"; 
// import { Order,OrderStatus,Payment } from "./order_types";
// import { Badge } from "@/components/ui/badge";
// import { TbBrandPaypal } from "react-icons/tb";
// import { HiCreditCard } from "react-icons/hi";
// import {formatDate,formatPrice} from "@/app/utils/shared_utils";

// export function TransformedOrders(initial_orders_data:Order[]){
//     return initial_orders_data.map((order) => ({
        
//         ...order,
//         initialStatus: order.status,
//         Status:<>{renderOrderStatusBadge(order.status as OrderStatus)}</>,
//         payment:<>{renderPaymentBadge(order.payment as Payment)}</>,
//         orderId: <span className="text-gray-500">{order.orderId}</span>,
//         amount: <span className="font-medium">{order.amount}</span>,
//         crearedAt: <span >{formatDate(order.crearedAt)}</span>,

//         }));
//     }

//     function renderPaymentBadge(payment: Payment) {
//         const paymentMap:Record<PaymentAddress,JSX.Element> = {
//             PayPal:<TbBrandPaypal/>,
//             "Credit Card":<HiCreditCard/>,
//             "Master Card":<FaCcMastercard/>,
//         }
//         return (
//             <div className="bg-primary/10 text-primary p-[3px] w-fit px-2 rounded-md gap-1 flex items-center">
//             {paymentMap[payment] }
//             <span >{payment}</span>
//             </div>
//         );
        
// }

// export function renderOrderStatusBadge(status: OrderStatus) {
//     const statusMap: Record<OrderStatus, JSX.Element> = {
//         Pending: <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Pending</span>,
//         Completed: <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Completed</span>,
//         Cancelled: <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Cancelled</span>,
//         Refunded: <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Refunded</span>,
//     };
//     return statusMap[status];
// };

// return (
//     <Badge className={`${statusMap[status]} shadow-none hover:${statusMap[status]} select-none`}
//     >
//         {status}
//     </Badge>
// )
