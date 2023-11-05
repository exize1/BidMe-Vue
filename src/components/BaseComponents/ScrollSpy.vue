<template>
       <div className="">
            <div className="title-list-container px-3 pt-3" tabindex="0" >
                <div className="hand-emoji-container">
                    <FontAwesomeIcon icon="fa-hand" />
                </div>
                <h2 className="text-start">All Bids</h2>
                <p className="mb-0 ms-2">Total Bids: {{filteredBids(filterKey).length}}</p>
            </div>
            <div className="text-start bg-light top-list-container px-3" tabIndex="0" >
                <div className="row">
                
                    <div className="col">
                        <p className="m-0">Serial</p>
                    </div>     
                    <div className="col">
                        <p className="m-0">Name</p>
                    </div>        
                    <div className="col">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#Price" role="button" aria-expanded="false">Price</a>
                        <ul :className="`dropdown-menu ${addOverflow}`">
                            <li v-for="(bid, index) in removePriceDuplicate(filterKey).reverse()"><a className="dropdown-item" :href="'#' + bid.price">{{bid.price}}$</a></li>
                        </ul>
                    </div>            
                    <div className="col">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#BidDate" role="button" aria-expanded="false">Bid date</a>
                        <ul :className="`dropdown-menu ${addOverflow}`">
                            <li v-for="(bid, index) in removeDateDuplicate(filterKey).reverse()" :key="index"><a className="dropdown-item" :href="'#' + bid.bidDate">{{bid.bidDate}}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-start list-container scrollspy-example bg-light px-3 mt-0" tabindex="0" >
                <div v-for="(bid, index) in filteredBids(filterKey).reverse()" :key="index" className="row bid-details-container">
                    <div className="col">
                        <p className="bid-details">{{index + 1}}.</p>
                    </div>            
                    <div className="col">
                        <p className="bid-details">{{bid.biderName}}</p>
                    </div>            
                    <div className="col">
                        <p className="bid-details" id={bid.price}>{{bid.price}}$</p>
                    </div>            
                    <div className="col">
                        <p className="bid-details" id={bid.bidDate}>{{bid.bidDate}}</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'ScrollSpy',
        computed:{
            bids(){
                return this.$store.state.bids
            }
        },
        methods:{
            removePriceDuplicate(filterKey) {
                let bidsWithoutDup = []
                let isInclude = false
                    this.filteredBids(filterKey).forEach((element) => {
                        bidsWithoutDup.length === 0 && bidsWithoutDup.push(element)
                        if (bidsWithoutDup.length !== 0){
                            bidsWithoutDup.forEach(newElement => {
                                if(newElement.price.includes(element.price)){
                                    isInclude = true
                                }
                            })
                            !isInclude && bidsWithoutDup.push(element)  
                            isInclude = false
                        }
                    });
                    return bidsWithoutDup
            },
            removeDateDuplicate(filterKey) {
                let bidsWithoutDup = []
                let isInclude = false
                    this.filteredBids(filterKey).forEach((element) => {
                        bidsWithoutDup.length === 0 && bidsWithoutDup.push(element)
                        if (bidsWithoutDup.length !== 0){
                            bidsWithoutDup.forEach(newElement => {
                                if(newElement.bidDate.includes(element.bidDate)){
                                    isInclude = true
                                }
                            })
                            !isInclude && bidsWithoutDup.push(element)  
                            isInclude = false
                        }
                    });
                    return bidsWithoutDup
            },
            filteredBids(filterKey){
                return(
                    this.bids.filter((val) => {
                        if(filterKey === ""){
                            return val;
                        }else if(val.productId.includes(filterKey)){
                            return val;
                        }else return null
                    })
                    )
                }
        },
        props:{
            filterKey: {
                type: String
            },
            product:{
                type: Object,
                required: true
            },
            addOverflow:{
                type: String
            }
        }
    }
</script>

<style scoped>
.scrollspy-example{
    height: fit-content;
    max-height: 200px;
    margin-top: 0.5rem;
    overflow: auto;  
    scroll-behavior: smooth;
}

.title-list-container{
    display: flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: white;
}

.hand-emoji-container{
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 1.4rem;
}

.top-list-container{
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-top: 0;

}

.list-container{
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-top: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.bid-details-container{
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}

.bid-details{
    margin: 15px 0;
}

.dropdown-menu{
    max-height: 180px;
}
</style>