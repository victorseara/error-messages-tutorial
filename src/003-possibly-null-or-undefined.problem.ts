const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get("id");

if(id){
  console.log(id.toUpperCase());
}
