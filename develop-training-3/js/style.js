
export const domStyling = {
  body : {
    width:"100vw",
    height:"100vh",
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
  },
  root : {
    width:"50vw",
    height:"inherit",
    backgroundColor:"gray",
    display:"flex",
    flexDirection:"column"
  },
  header : {
    width:"inherit",
    height: "5vh",
    backgroundColor : "lightcoral"
  },
  main : {
    width:"inherit",
    height: "95vh",
    backgroundColor : "lightgray",
    display:"flex",
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "center",
    paddingRight: "1vw"
  },
  articleLeft : {
    width:"25vw",
    height:"inherit",
    backgroundColor: "gray",
    display:"flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
    gap:"1vh"
  },
  articleCenter : {
    width:"5vw",
    height:"inherit",
    backgroundColor:"cadetblue"
  },
  articleRight : {
    width: "12vw",
    height:"inherit",
    gap: "2vw",
    display: "flex",
    flexDirection: "column"
  }
}




export default domStyling;