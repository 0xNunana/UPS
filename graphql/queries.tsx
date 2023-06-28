import {gql} from '@apollo/client'

export const GET_CUSTOMERS =gql`
query GetCustomers{
    getCustomer{
        value{
            email
            name
        }
        name
    }
}
`

export const GET_ORDERS = gql`
query GetOrders{
    getOrders{
        value{
            carrier
            createdAt
            trackingId
            shippingCost
            Address
            City
            Lng 
            Lat
            trackingItems{
                customer_id
                customer{
                    email
                    name
                }
                items{
                    item_id
                    name
                    price
                    quantity
                }
            }
        }
    }
}

`



// export function MyComponent() {
//   const { loading, error, data } = useQuery(gql`  query getTrackingItems {
//     getTrackingItems {
//       name
//       value {
//         customer_id
//       }
//     }
//   }`, {
//     variables: {},
//   })

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Something went wrong...</p>;

//   return (
//     <p>
//       {console.log(data)}
//     </p>
//   )
// }
