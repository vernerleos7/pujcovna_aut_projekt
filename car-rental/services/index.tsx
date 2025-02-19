import request,{gql} from "graphql-request"

export const getCarsList=async()=>{
    const query=gql`
    query MyQuery {
        carLists {
            createdAt
            id
            name
            price
            publishedAt
            updatedAt
            image {
            url
            }
            carType
            carBrand
            carSeats
            carEngine
        }
    }
    `

    const result=await request('https://us-west-2.cdn.hygraph.com/content/cm5zz83m801hl07v0ozmyanx9/master',query);
    return result;

}