function submitBtn(){
    
    var item= $("#list_item").val()
    if(item && item!==' ' && item!=='   '){
        console.log(item)
        $.ajax({
         url: 'add_item',         
         data: {
            'item': item,
            
        },
         type: 'GET'
       }).done(function(response){
         console.log(response);         
         location.reload();
       });
    }
    else{
        alert("Enter Item")
    }
    
}

function deleteFunc(i){
    console.log("deletefunc",i)
    if (confirm("Are you sure to delete?")){
    $.ajax({
        url:"delete_item",
        data:{
            'item_id': i
        },
        type:"GET"
    }).done(function(response){       
        location.reload();
        alert("Item Deleted")
        
    })
}
}