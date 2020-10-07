window.addEventListener("resize",function(){
    if(window.innerWidth >1000 ){

        document.getElementById("slide").style.width = "280px";
        document.getElementById("searchIp").style.display = "";
        document.getElementsByClassName("search-icon")[0].style.display ="";
        document.getElementById("ustool").style.display ="";
        document.getElementById("title").style.display ="";
        for(var i = 0; i < document.getElementsByClassName("title").length; i++){
            document.getElementsByClassName("title")[i].style.display = "";
        }
        document.getElementsByClassName("sidebarAction-label")[0].style.display = "";
    }
    
    if(window.innerWidth <1000 ){
        document.getElementById("slide").style.width = "43px";
        document.getElementById("searchIp").style.display = "none";
        document.getElementsByClassName("search-icon")[0].style.display ="none";
        document.getElementById("ustool").style.display ="none";
        document.getElementById("title").style.display ="none";
        document.getElementById("sidebarAction").style.width ="43px";
        for(var i = 0; i < document.getElementsByClassName("title").length; i++){
            document.getElementsByClassName("title")[i].style.display = "none";
        }
        document.getElementsByClassName("sidebarAction-label")[0].style.display = "none";
    }
});


//-----------------------------------------Ẩn main-left--------------------------

    document.querySelector("#slide #ltToogle").addEventListener("click",displayleft)
function displayleft(){

        if(window.innerWidth >1000 ){
            document.getElementById("slide").classList.toggle("slide");
            document.getElementById("slide").classList.remove("silde1")
        }
        else{
            document.getElementById("slide").classList.toggle("slide1");
            document.getElementById("slide").classList.remove("silde")
        }
}
    $("#user-tool").click(function(){
        $("#user-ck").toggle();
    });
    $("#account-se").click(function(){
        $("#ouibounce-account").show();
        $("#user-ck").hide();
    });

    $("#done").click(function(){
        $("#ouibounce-account").hide(300);
    });

    $("#sidebarAction").click(function(){
        $("#create-new-list").show();
        $("#CreateList").val("");
    });

    $("#Cance").click(function(){
        $("#create-new-list").hide(300); 
    });

    
    $("#ListCrt").on("click",".list",function(){
       
        $(this).toggleClass("activeTb");
        $(this).siblings().removeClass("activeTb");
            pick_id_left = $(this).find(".id_list_left").text();
            pick_id_left =+ pick_id_left;
            console.log(pick_id_left);
            showtaskbyid();
            show_completed_byid1();
            
    })

    $(document).click(function(e){
        e.stopPropagation();
        var dropdow = $("#dropdow")
        if (dropdow.has(e.target).length === 0) {
            $('#user-ck').hide();
        }
    });

    $(".underlay").click(function(e){
        e.stopPropagation();
        var account_setting = $("account-setting")
        if(account_setting.has(e.target).length === 0){
            $("#ouibounce-account").hide();
    }
    })

    $(".underlay").click(function(e){
        e.stopPropagation();
        var create_new_list = $("content")
        if(create_new_list.has(e.target).length === 0){
            $("#create-new-list").hide();
    }
    })
    var contextmenu_left_delete;
    $(".list-scroll").on("contextmenu",".list",function(e){
                
        e.preventDefault();
        $("#context-list").show();
        $("#context-list").offset({left:e.pageX, top:e.pageY});
        $(document).click(function(){
                $("#context-list").hide();
        })    

        contextmenu_left_delete = $(this);
        remove_id_list_left = $(this).children(".id_list_left")
    })

    $("#btSaveList").click(function(){
        if($("#CreateList").val().length>0){
           
            var a = $(this).val();

            var new_id_list_left = id_list_left.length + 1;
            var new_list_left = {idL: maxnumberlistid + 1 , name: a};
            list_left.push(new_list_left);
            id_list_left.push(new_id_list_left);
            maxnumberlistid = Math.max.apply( Number , id_list_left );

            var li_create_list = document.createElement("li");
                    li_create_list.className = "list";
                    var a = document.createElement("a");
                    li_create_list.append(a);
                    a.insertAdjacentHTML('beforeend', '<span  style="fill: #288ae9;" class="list-icon"><svg class="list rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Web-svgs" stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="list"> <path d="M3,7 C2.44,7 2,6.56 2,6 L2,5 C2,4.44 2.44,4 3,4 L4,4 C4.56,4 5,4.44 5,5 L5,6 C5,6.56 4.56,7 4,7 L3,7 Z M4,5 L3,5 L3,6 L4,6 L4,5 Z M7.5,6 C7.22,6 7,5.78 7,5.5 C7,5.22 7.22,5 7.5,5 L17.5,5 C17.78,5 18,5.22 18,5.5 C18,5.78 17.78,6 17.5,6 L7.5,6 Z M3,12 C2.44,12 2,11.56 2,11 L2,10 C2,9.44 2.44,9 3,9 L4,9 C4.56,9 5,9.44 5,10 L5,11 C5,11.56 4.56,12 4,12 L3,12 Z M4,10 L3,10 L3,11 L4,11 L4,10 Z M7.5,11 C7.22,11 7,10.78 7,10.5 C7,10.22 7.22,10 7.5,10 L17.5,10 C17.78,10 18,10.22 18,10.5 C18,10.78 17.78,11 17.5,11 L7.5,11 Z M3,17 C2.44,17 2,16.56 2,16 L2,15 C2,14.44 2.44,14 3,14 L4,14 C4.56,14 5,14.44 5,15 L5,16 C5,16.56 4.56,17 4,17 L3,17 Z M4,15 L3,15 L3,16 L4,16 L4,15 Z M7.5,16 C7.22,16 7,15.78 7,15.5 C7,15.22 7.22,15 7.5,15 L17.5,15 C17.78,15 18,15.22 18,15.5 C18,15.78 17.78,16 17.5,16 L7.5,16 Z" id="K"> </path> </g> </g> </svg></span>')
                    var span = document.createElement("span");
                    span.className = "title"
                    span.innerText = $("#CreateList").val();
                    var spanid = document.createElement("span")
                    spanid.className = "id_list_left";
                    spanid.innerText = new_list_left.idL;
                    a.append(spanid)    
                    a.append(span)

                    $("#ListCrt").append(li_create_list);
                    $("#create-new-list").hide(200);

            }   
                else if($("#CreateList").val().trim().length  == 0)
                {   
                    alert("Bạn chưa nhập List Name");
                }
               
    })
    //------- 
    var maxnumberlistid = 0
    var list_left = [];
    var id_list_left = [];
    function array_ListCrt(){
        list_left=[];
        var array_list_left_ListCrt = document.querySelector("#ListCrt").children;

     
        for( var i = 0;i < array_list_left_ListCrt.length;i ++ ){

            var name = array_list_left_ListCrt[i].querySelector(".title").innerHTML
            var idL =i;
                // console.log(name);
            var item = {
                "idL" : idL,
                "name" : name,

            }
            list_left.push(item)
        }
        return list_left;
        
    }
    array_ListCrt();
    //----
    
    
    $("#CreateList").keyup(function (e) { 
        if(e.keyCode === 13 ){
            if($("#CreateList").val().trim().length > 0 ) {
                // array_ListCrt();
                var a = $(this).val();
                // console.log(a);
                var new_id_list_left = id_list_left.length + 1  ;
                var new_list_left = {idL: maxnumberlistid + 3 , name: a, status: 0 };
                console.log(list_left.idL);
                list_left.push(new_list_left);
                id_list_left.push(new_id_list_left);
                maxnumberlistid = Math.max.apply( Number , id_list_left );
                // pick_id_left = new_list_left.idL;
              
                var li_create_list = document.createElement("li");
                        li_create_list.className = "list";
                        var a = document.createElement("a");
                        li_create_list.append(a);
                        a.insertAdjacentHTML('beforeend', '<span  style="fill: #288ae9;" class="list-icon"><svg class="list rtl-flip" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Web-svgs" stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="list"> <path d="M3,7 C2.44,7 2,6.56 2,6 L2,5 C2,4.44 2.44,4 3,4 L4,4 C4.56,4 5,4.44 5,5 L5,6 C5,6.56 4.56,7 4,7 L3,7 Z M4,5 L3,5 L3,6 L4,6 L4,5 Z M7.5,6 C7.22,6 7,5.78 7,5.5 C7,5.22 7.22,5 7.5,5 L17.5,5 C17.78,5 18,5.22 18,5.5 C18,5.78 17.78,6 17.5,6 L7.5,6 Z M3,12 C2.44,12 2,11.56 2,11 L2,10 C2,9.44 2.44,9 3,9 L4,9 C4.56,9 5,9.44 5,10 L5,11 C5,11.56 4.56,12 4,12 L3,12 Z M4,10 L3,10 L3,11 L4,11 L4,10 Z M7.5,11 C7.22,11 7,10.78 7,10.5 C7,10.22 7.22,10 7.5,10 L17.5,10 C17.78,10 18,10.22 18,10.5 C18,10.78 17.78,11 17.5,11 L7.5,11 Z M3,17 C2.44,17 2,16.56 2,16 L2,15 C2,14.44 2.44,14 3,14 L4,14 C4.56,14 5,14.44 5,15 L5,16 C5,16.56 4.56,17 4,17 L3,17 Z M4,15 L3,15 L3,16 L4,16 L4,15 Z M7.5,16 C7.22,16 7,15.78 7,15.5 C7,15.22 7.22,15 7.5,15 L17.5,15 C17.78,15 18,15.22 18,15.5 C18,15.78 17.78,16 17.5,16 L7.5,16 Z" id="K"> </path> </g> </g> </svg></span>')
                        var span = document.createElement("span");
                        span.className = "title"
                        span.innerText = $("#CreateList").val();
                        a.append(span)
                        var spanid = document.createElement("span")
                        spanid.className = "id_list_left";
                        spanid.innerText = new_list_left.idL;
                        a.append(spanid)  
                        $("#ListCrt").append(li_create_list);
                        $("#create-new-list").hide(200);
                        // li_create_list.contextmenu()
                    // console.log(li_create_list);
                  
                    }
                    else if($("#CreateList").val()  == 0)
                    {   
                        alert("Bạn chưa nhập List Name");
                      
                    }    
        }
    });    
     


    $("#delete3").click(function(){
        contextmenu_left_delete.remove();
        console.log(this_center.parent());
        // console.log(contextmenu_left_center);
        // console.log("123");
        // console.log(contextmenu_left_delete.children().eq(2).text());
        let text_id_list_left = contextmenu_left_delete.children().eq(2).text();
        text_id_list_left =+ text_id_list_left;
        list_left = list_left.filter((list_left1) => {
            return list_left1.idL !== text_id_list_left;
        })

        // showtaskbyid();
    })
    $(".list-scroll").on("click",".list",function(){
        $("#title-center").html($(this).find(".title").text())
        // console.log($(this));
    })

//---------center
    $(".taskList ").on("click",".taskItem",function(){
        $(this).toggleClass("taskIt-active");
        $(this).siblings().removeClass("taskIt-active");
        pick_center_id_center = $(this).find(".id_list_center").text();
        pick_center_id_center = +pick_center_id_center;
        pick_center_id_left = $(this).find(".id_list_center_1").text();
        pick_center_id_left = +pick_center_id_left;
        
console.log(pick_center_id_center);
console.log(pick_center_id_left);
    })
        
        var opacitystar =0 ;

    $(".addtask-starred").click(function(){
        const d = $("#D");
        var addTaskstar = $(".addtask-starred")[0];
        // opacitystar = 0;
        if ( $("#D").css("opacity")  == '1') {
            $("#D").css("opacity",'0');
            $(".addtask-starred").css("opacity",'0.7');
            opacitystar = 0;
            return opacitystar;
        } else {
          
            $("#D").css("opacity",'1');
            $(".addtask-starred").css("opacity",'unset');
            opacitystar = 1;
            return opacitystar;
        }
    })

     var maxnumber_list_id_center= 0
    var list_center = [];
    var id_list_center = [];
   $("#inputTask").keydown(function(e){
        if (e.keyCode == 13){
            // console.log(opacitystar);
            if($("#inputTask").val().length >0){
                var b = $(this).val();
                var new_id_list_center = id_list_center.length + 1;
                var new_list_center = {id_center: maxnumber_list_id_center + 1 , name: b, idList: pick_id_left, status: opacitystar };
                list_center.push(new_list_center);
                id_list_center.push(new_id_list_center);
                maxnumber_list_id_center = Math.max.apply( Number , id_list_center );
                
                // console.log(list_left.idL);
                // console.log(list_left.idL);
                showtaskbyid();
                      $("#inputTask").val("");
            }
            else{
                alert('Bạn chưa nhập  Name to-do');
            }
            
        }
    })

    
    function showtaskbyid(list_center1){
        
         list_id = list_center;
                list_id = list_id.filter((task) => {
                    return task.idList === pick_id_left;
                })
        $("#todo").html('');
        // console.log(tasksid);
        list_id.forEach((item) => {
            var element = ` <div class="taskItem " draggable="true" >
            <button class="box">
            <svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>
            </button>
            <div class="item-wrapper">
                <span >` + item.name + `</span>
                <span class= "id_list_center" >`+ item.id_center +`</span>
                <span class= "id_list_center_1" >`+ item.idList +`</span>
                <span class="date_input"></span>
                <span class="status_center">`+ item.status+`</span>
            </div>
            <button class="star">
                <svg width="18px" class="task-star" id="task-star" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>
                <svg style="display:none" width="36px" height="44px" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421; display: block;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>
            </button>
        </div>`;
            
            // $(".taskList ").append(element);
            $(element).appendTo("#todo")
        })
        for( let i = 0; i < $(".taskList").children().length; i ++ ){
            // console.log($(".taskItem").eq(i).children(".item-wrapper").children(".status_center").text());
            if( +$(".taskItem").eq(i).children(".item-wrapper").children(".status_center").text() === 1 ){
                // console.log("123");
                $(".taskItem").eq(i).children(".star").children(".task-star").hide();
                $(".taskItem").eq(i).children(".star").children(".star-dd").show();

            }
            else {
                // console.log("321");
                $(".taskItem").eq(i).children(".star").children(".task-star").show();
                $(".taskItem").eq(i).children(".star").children(".star-dd").hide();
            }
            
        }
        
    }   
        function star_completed(){
            for( let i = 0; i < $(".task-deleee").children().length; i ++ ){
                // console.log($(".taskItem").eq(i).children(".item-wrapper").children(".status_center").text());
                if( +$(".taskItem-dele").eq(i).children(".item-wrapper").children(".status_center").text() === 1 ){
                    // console.log("123");
                    $(".taskItem-dele").eq(i).children(".star").children(".task-star").hide();
                    $(".taskItem-dele").eq(i).children(".star").children(".star-dd").show();
    
                }
                else {
                    // console.log("321");
                    $(".taskItem-dele").eq(i).children(".star").children(".task-star").show();
                    $(".taskItem-dele").eq(i).children(".star").children(".star-dd").hide();
                }
                
            }
        }
    $("#todo").on("click",".star",function(){
        click_star = $(this)
        
        // console.log($(this).parent().children().eq(1).children().eq(4).text());
        let text_id_list_center = $(this).parent().children().eq(1).children().eq(1).text();
        let text_status_center = $(this).parent().children().eq(1).children().eq(4).text();
        if(+text_status_center === 0){
            list_center.forEach(task => {
                
                if( task.id_center === +text_id_list_center ){
                   
                    task.status = 1 ;
                     console.log("123");
                    if($(".display-view").val() == $(this).parent().children().eq(1).children().eq(0).text()){
                        $(".title-head").children().eq(3).find('.star-dd').css("display","block");
                        $(".title-head").children().eq(3).find('.task-star').css("display","none");
                        $(".title-head .status_center").html(1);
                    }
                }
            });
        }
        else {
                 console.log("321");
            list_center.forEach((task) =>{
                if( task.id_center === +text_id_list_center ){
                    // console.log("123");
                    task.status = 0 ;
                    if($(".display-view").val() == $(this).parent().children().eq(1).children().eq(0).text()){
                        $(".title-head").children().eq(3).find('.star-dd').css("display","none");
                        $(".title-head").children().eq(3).find('.task-star').css("display","block");
                        $(".title-head .status_center").html(0);
                        // console.log($(".star").children('.task-star'));
                    }
                }
            })
            
        }
        showtaskbyid(list_center);
        
        
    })   
        
    $(".task-deleee").on("click",".star", function(){
        console.log($(this).parent().children().eq(1).children().eq(4).text());
        if(+$(this).parent().children().eq(1).children().eq(4).text() === 1){
            $(this).parent().children().eq(1).children().eq(4).html(0);
            $(this).children('.task-star').show()
            $(this).children('.star-dd').hide()
            if($(".display-view").val() == $(this).parent().children().eq(1).children().eq(0).text()){
                $(".title-head").children().eq(3).find('.star-dd').css("display","none");
                $(".title-head").children().eq(3).find('.task-star').css("display","block");
                $(".title-head .status_center").html(0);
                // console.log($(".star").children('.task-star'));
            }
           
        }
        else{
            $(this).parent().children().eq(1).children().eq(4).html(1);
            $(this).children('.task-star').hide();
            $(this).children('.star-dd').show();
            if($(".display-view").val() == $(this).parent().children().eq(1).children().eq(0).text()){
                $(".title-head").children().eq(3).find('.star-dd').css("display","block");
                $(".title-head").children().eq(3).find('.task-star').css("display","none");
                $(".title-head .status_center").html(1);
                // console.log($(".star").children('.task-star'));
            }
        }
    })


    function show_completed_byid1(){
        for( let i = 0; i < $(".taskItem-dele").length; i ++ ){
            if( +$(".taskItem-dele").eq(i+1).children(".id_list_center_1").text() === pick_id_left ){
            $(".taskItem-dele").eq(i+1).show();

            }else{
            $(".taskItem-dele").eq(i+1).hide();
            }
        }
    } 

   
        $(document.body).on("click",".star",function(){
            click_star = $(this)
            // console.log(click_star);
            // console.log($(this).parent().children().eq(1).children().eq(4).text());
            let text_id_list_center = $(this).parent().children().eq(1).children().eq(1).text();
            let text_status_center = $(this).parent().children().eq(1).children().eq(4).text();
            if(+text_status_center === 0){
                list_center.forEach(task => {
                    
                    if( task.id_center === +text_id_list_center ){
                       
                    task.status = 1 ;
                 }
                } );
            }
            else {
                    //  console.log("321");
                list_center.forEach((task) =>{
                    if( task.id_center === +text_id_list_center ){
                        // console.log("123");
                        task.status = 0 ;
                    }
                })
                
            }
            showtaskbyid(list_center);
        })   

       
        
        $(".taskList").on("contextmenu",".taskItem",function(e){
            e.preventDefault();
            $("#context-menu-huu").show();
            $("#context-menu-huu").offset({left:e.pageX, top:e.pageY});
            $(document).click(function(){
                    $("#context-menu-huu").hide();
            })    
    
            contextmenu_left_center = $(this);
            remove_id_list_center = $(this).children(".id_list_center");
            
            // console.log($(this).children().eq(1).children().eq(1).text());
            // text_id_list_center.remove()
        })
        var contextmenu_list_completed;
        $(".task-deleee").on("contextmenu",".taskItem-dele",function(e){
            e.preventDefault();
            $("#context-menu-huu").show();
            $("#context-menu-huu").offset({left:e.pageX, top:e.pageY});
            $(document).click(function(){
                    $("#context-menu-huu").hide();
            })    
            contextmenu_list_completed = $(this)
            console.log(contextmenu_list_completed);
        })
        $("#deletodo").click(function(){
            $("#alert-confirm-delete-list-center").show();
        })
        $(".underlay").click(function(e){
            e.stopPropagation();
            var alert_deletetaskItem = $("alert-deletetaskItem")
            if(alert_deletetaskItem.has(e.target).length === 0){
                $("#alert-confirm-delete-list-center").hide();
        }
        })
        $("#cancel1").click(function(e){
            $("#alert-confirm-delete-list-center").hide(200);
        })
        $("#delete-to-do").click(function(e){
            contextmenu_left_center.remove();
            if(contextmenu_list_completed != undefined){
                contextmenu_list_completed.remove();
            }

            $("#alert-confirm-delete-list-center").hide(200);
            if(contextmenu_left_center.children().eq(1).children().eq(0).text() == $(".display-view").val()){
                $("#main-right").css("width","0px");
            }   
            // console.log(contextmenu_left_center.children().eq(1).children().eq(1).text());
            let text_id_list_center = contextmenu_left_center.children().eq(1).children().eq(1).text();
            text_id_list_center =+ text_id_list_center;
            list_center = list_center.filter((list_center) => {
                return list_center.id_center !== text_id_list_center;
            })
        })

        $(".delete-right").click(function(){
            
            if($(".display-view").val() == this_center.children().eq(1).children().eq(0).text()){
                console.log(this_center);
                this_center.remove();
                $(".display-view").val("");
                $(".title-head").find("#detail-checkbox").children().eq(0).css("display","block");
                $(".title-head").find("#detail-checkbox").children().eq(1).css("display","none");
                $(".title-head").find("#starhead").children().eq(0).css("display","block");
                $(".title-head").find("#starhead").children().eq(1).css("display","none");
                console.log($(".title-head").find("#detail-checkbox").children().eq(0));
            }
        });

        $(".taskList").on("click",".box",function(){
            
            $(this).parent().remove();
             $(".taskItem-dele").children().eq(1).children().eq(0).html($(this).parent().children().eq(1).children().eq(0).html()) ;
             $(".taskItem-dele").children().eq(1).children().eq(1).html($(this).parent().children().eq(1).children().eq(1).html()) ;
             $(".taskItem-dele").children().eq(1).children().eq(2).html($(this).parent().children().eq(1).children().eq(2).html()) ;
             $(".taskItem-dele").children().eq(1).children().eq(4).html($(this).parent().children().eq(1).children().eq(4).html())
             $(".taskItem-dele").children().eq(1).children().eq(3).html("Wellcome to Turtle")
             var status = $(this).parent().find('.star-dd').css("display")
             var newElm = $(".task-deleee").children().eq(0).clone();
         //  console.error($(this).parent().find('.star-dd').css("display"));
         
          newElm.children().eq(2).find('.star-dd').css("display",status);
          if(status === 'none') {
              newElm.children().eq(2).find('.task-star').css("display","block");
          } else {
             newElm.children().eq(2).find('.task-star').css("display","none");  
          }
          newElm.appendTo(".task-deleee");
          if($(".display-view").val() == $(this).parent().children().eq(1).children().eq(0).text() ){
                 $(".title-head").find(".task-check").css("display","none");
                 $(".title-head").find(".checkdele").css("display","block");
             }
            // console.error($(".title-head").find(".task-check"));
            let text_id_list_center = $(this).parent().children().eq(1).children().eq(1).text();
            text_id_list_center =+ text_id_list_center;
            list_center = list_center.filter((list_center) => {
                return list_center.id_center !== text_id_list_center;
            })
            
        });
           
        $(".task-deleee").on("click",".box1",function(){
            
            console.log($(this).parent().children().eq(1).children().eq(0).text());
            $(this).parent().remove();
            var b = $(this).parent().children().eq(1).children().eq(0).text();
            var c = +$(this).parent().children().eq(1).children().eq(1).text();
            var d = +$(this).parent().children().eq(1).children().eq(4).text();
            
            var new_id_list_center = id_list_center.length + 1;
            var new_list_center= {id_center: c, name: b, idList: pick_id_left, status: d };
            list_center.push(new_list_center);
            id_list_center.push(new_id_list_center);
            maxnumber_list_id_center = Math.max.apply( Number , id_list_center );

            if($(".display-view").val() == $(this).parent().children().eq(1).children().eq(0).text() ){
                $(".title-head").find(".task-check").css("display","block");
                $(".title-head").find(".checkdele").css("display","none");
            }
            list_id_center = list_center;
            list_id_center = list_id_center.filter((task) => {
                    return task.idList === pick_id_left;
                })
                $("#todo").html('');
                showtaskbyid(list_id_center);
           
        })
        $(".close").click(function(){
            console.log("123");
            $("#main-right").css("width","0px")
        })
        var this_center;
        $(".taskList ").on("dblclick",".taskItem",function(){
            this_center = $(this)
           
            $("#main-right").css("width","367px")
            $(".title-head").children().eq(1).val($(this).children().eq(1).children().eq(0).html());
            $(".title-head").children().eq(2).html($(this).children().eq(1).children().eq(4).text());
            let status = $(this).parent().find('.star-dd').css("display")
        //   console.log($(this).children().eq(1).children().eq(4).text());
              $(".title-head").children().eq(3).html($(this).children().eq(2).html())

            // console.log($(this).children().eq(2).html())
              $(".title-head .task-check").css("display","block");
              $(".title-head .checkdele").css("display","none");
              $(".right_subtask").html("");
              show_subtask_byid();
        })
       
        $(".task-deleee").on("dblclick",".taskItem-dele",function(){
            this_center= $(this)
            $("#main-right").css("width","367px")
            $(".title-head").children().eq(1).val($(this).children().eq(1).children().eq(0).html());
            $(".title-head").children().eq(3).html($(this).children().eq(2).html())
              $(".title-head .task-check").css("display","none");
              $(".title-head .checkdele").css("display","block");
              pick_center_id_center = $(this).find(".id_list_center").text();
              pick_center_id_center = +pick_center_id_center;
              pick_center_id_left = $(this).find(".id_list_center_1").text();
              pick_center_id_left = +pick_center_id_left;
              $(".right_subtask").html("");
              show_subtask_byid();
        })

        $("#remove-due-date").click(function(){
            contextmenu_left_center.children().eq(1).children().eq(3).html("");
        })

        $(".showcom").click(function(){
            if($(".task-deleee").css("display") =="block"){
                $(".task-deleee").hide(500);
            }
            else{
                $(".task-deleee").show(500);
            }
        })

//--------right        
        $("#starhead").click(function(){
            console.log(this_center);
            let text_id_list_center = this_center.children().eq(1).children().eq(1).text();
            let text_status_center = this_center.children().eq(1).children().eq(4);
            
            if($(this).children().eq(0).css("display") == "block" ){
                $(this).children().eq(0).css("display","none")
                $(this).children().eq(1).css("display","block")
                $(this).parent().children().eq(2).html(1);
                // text_status_center.html(1)
                    if($(".display-view").val() == this_center.children().eq(1).children().eq(0).text()){
                        this_center.children().eq(1).children().eq(4).html(1)
                        star_completed();
                        // console.log(this_center.children().eq(1).children().eq(4).html());
                    }
                list_center.forEach(task => {
                    
                    if( task.id_center === +text_id_list_center ){
                       
                    task.status = 1 ;
                 }
                } );
                showtaskbyid(list_center);
                
            }
            else{
                $(this).children().eq(1).css("display","none")
                $(this).children().eq(0).css("display","block")
                $(this).parent().children().eq(2).html(0);
                console.log(this_center);
                
                if($(".display-view").val() == this_center.children().eq(1).children().eq(0).text()){
                    this_center.children().eq(1).children().eq(4).html(0)
                    star_completed();
                }
                list_center.forEach(task => {
                    
                    if( task.id_center === +text_id_list_center ){
                       
                    task.status = 0 ;
                 }
                } );
                showtaskbyid(list_center);
            }

        })
        $(".display-view").keydown(function(e){
            if(e.keyCode == 13){
                if($(".display-view").val().trim().length > 0){
                    let text_id_list_center = this_center.children().eq(1).children().eq(1).text();
                    let text_status_center = this_center.children().eq(1).children().eq(4);
                        list_center.forEach(task => {
                            
                            if( task.id_center === +text_id_list_center ){
                               
                            task.name =  $(".display-view").val();
                         }
                        } );
                        showtaskbyid(list_center);
                }
            }
        });

    
        $("#searchIp").keyup(function(){

            var value = $(this).val().toUpperCase();
            $(".taskItem").filter(function() {
                 $(this).toggle($(this).text().toUpperCase().indexOf(value) > 0)
                 
            });
            if($(this).val().length == 0 ) {
                showtaskbyid(list_center);
            }          
        })

        $("#txtcomment").keydown(function(e){
            if(e.keyCode == 13){
                if($("#txtcomment").val().trim().length >0){
                    let divcomment = document.createElement("div");
                    divcomment.classList = "content-inner ";               
                    let img =  document.createElement("img");
                    img.setAttribute("src","D:\\TEST\\image\\ava.PNG");
                    divcomment.append(img)
                    let divtxtcomment = document.createElement("div");
                    divtxtcomment.classList = "content-people-meta";
                    divcomment.appendChild(divtxtcomment)
                    let spanname = document.createElement("span")
                    spanname.classList = "content-people-name-label";
                    spanname.innerText = "Trần Hoàng Quy:";
                    divtxtcomment.append(spanname);
                    let spancomment = document.createElement("span")
                    spancomment.classList = "valuenote";
                    spancomment.innerHTML = document.getElementById("txtcomment").value;
                    divtxtcomment.append(spancomment);
                    let divdelete = document.createElement("div");
                    divdelete.classList = "section-delete";
                    divcomment.appendChild(divdelete);
                    divdelete.insertAdjacentHTML("beforeend",'<svg class="delete" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="delete"> <path d="M10.72,9.9975 L13.86,6.8575 C14.04,6.6575 14.04,6.3375 13.86,6.1375 C13.66,5.9575 13.34,5.9575 13.14,6.1375 L10,9.2775 L6.86,6.1375 C6.66,5.9575 6.34,5.9575 6.14,6.1375 C5.96,6.3375 5.96,6.6575 6.14,6.8575 L9.28,9.9975 L6.14,13.1375 C5.96,13.3375 5.96,13.6575 6.14,13.8575 C6.24,13.9575 6.38,13.9975 6.5,13.9975 C6.62,13.9975 6.76,13.9575 6.86,13.8575 L10,10.7175 L13.14,13.8575 C13.24,13.9575 13.38,13.9975 13.5,13.9975 C13.62,13.9975 13.76,13.9575 13.86,13.8575 C14.04,13.6575 14.04,13.3375 13.86,13.1375 L10.72,9.9975 Z" id="4"></path> </g> </g> </svg><br>')
                    document.getElementById("note").append(divcomment);
                    $("#txtcomment").val("");
                }
            }
        })
      var newElm;
      var completed_remove_center;
        $("#detail-checkbox").click(function(){
            
            if($(this).children().eq(0).css("display") == "block"){
                $(this).children().eq(0).css("display","none");
                $(this).children().eq(1).css("display","block");

                this_center.remove();
                if($(".display-view").val() == this_center.children().eq(1).children().eq(0).html()){
                    $(".taskItem-dele").children().eq(1).children().eq(0).html($(".title-head .display-view").val()) ;
                    $(".taskItem-dele").children().eq(1).children().eq(1).html(this_center.children().eq(1).children().eq(1).html()) ;
                    $(".taskItem-dele").children().eq(1).children().eq(2).html(this_center.children().eq(1).children().eq(2).html()) ;
                    $(".taskItem-dele").children().eq(1).children().eq(4).html($(".title-head .status_center").text()) ;
                    $(".taskItem-dele").children().eq(1).children().eq(3).html("Wellcome to Turtle")
                        var status1 = $(this).parent().find('.star-dd').css("display")
                        newElm = $(".task-deleee").children().eq(0).clone();
                    newElm.children().eq(2).find('.star-dd').css("display",status1);
                    if(status1 === 'none') {
                        newElm.children().eq(2).find('.task-star').css("display","block");
                    } 
                     else {
                       newElm.children().eq(2).find('.task-star').css("display","none");  
                    }
                    newElm.appendTo(".task-deleee");
                   
                    if($(".display-view").val() == $(this).parent().children().eq(1).children().eq(0).text() ){
                           $(".title-head").find(".task-check").css("display","none");
                           $(".title-head").find(".checkdele").css("display","block");
                       }
                       console.log(completed_remove_center)
                   let text_id_list_center = this_center.children().eq(1).children().eq(1).text();
                   text_id_list_center =+ text_id_list_center;
                   list_center = list_center.filter((list_center) => {
                       return list_center.id_center !== text_id_list_center;
                   })
                        
                        
                }  
                showtaskbyid(list_center);
              
            }
            
            else{ console.log(newElm);
                $(".taskList ").html("");
                $(this).children().eq(1).css("display","none");
                $(this).children().eq(0).css("display","block");
                this_center.remove();
                console.log($(".title-head .status_center").text());
                var b = newElm.children().eq(1).children().eq(0).text();
                var c = +newElm.children().eq(1).children().eq(1).text();
                var d = newElm.children().eq(1).children().eq(4).text();
                console.log(newElm.children().eq(1).children().eq(4).html());
                 let new_id_list_center = id_list_center.length + 1;
                 let new_list_center= {id_center: c, name: b, idList: pick_id_left, status: d };
                list_center.push(new_list_center);
                id_list_center.push(new_id_list_center);
                maxnumber_list_id_center = Math.max.apply( Number , id_list_center);
                    list_id_center = list_center;
                    list_id_center = list_id_center.filter((task) => {
                        return task.idList === pick_id_left;
                    })
                    $("#todo").html('');
                    if(newElm !== undefined){
                        newElm.remove();
                     }   
                    //  console.log(new_list_center_completed);
                    completed_remove_center = new_list_center
                    showtaskbyid(list_id_center);
            }
        })
        
        $(".note").on("click",".section-delete",function(){
            $(this).parent().remove();
        })
        var setduedate;
        function handler(e){
            this_center.find(".item-wrapper").children().eq(3).html(e.target.value);

            setduedate = e.target.value;
            
          }
        function duedate(){
            console.log(setduedate);
        }
        duedate(); 
//------------------------
var list_subtask = [];
var id_list_subtask = [];
var maxnumber_list_id_subtask= 0;

$(".add_subtask").keydown(function(e){
    if(e.keyCode == 13){
        if($(".add_subtask").val().trim().length > 0){
            var text_subtask  = $(this).val();
            var new_id_list_subtask = id_list_subtask.length +1 ;
            var new_list_subtask = {id_subtask: maxnumber_list_id_subtask +1 ,name:text_subtask, idL_subtask_center:pick_center_id_center, idL_subtask_left: pick_center_id_left,status_ckb: 0   };
            list_subtask.push(new_list_subtask);
            id_list_subtask.push(new_id_list_subtask)
            maxnumber_list_id_subtask = Math.max.apply(Number, id_list_subtask)
            show_subtask_byid();
                $(".add_subtask").val("")
        }
    }
});

function show_subtask_byid(){
    list_id_subtask = list_subtask ; 
        list_id_subtask =list_id_subtask.filter((task) =>{
            return  task.idL_subtask_center === pick_center_id_center;
        })
       $(".right_subtask").html("");
       list_id_subtask.forEach((item) =>{
           let item_subtask =  `<div class="item_subtask">

            <button class="box_subtask">
                    <svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>
                    <svg class="checkdele" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path> <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path> </g> </svg>
            </button>
                <span>`+ item.name+`</span>
                <span class="id_subtask_right">`+item.id_subtask+`</span>
                <span class = "subtask_id_center">`+item.idL_subtask_center+`</span>
                <span class="subtask_id_left">`+item.idL_subtask_left+`</span>
                <span class="status_ckb">`+item.status_ckb+`</span>
           </div>`;
            $(item_subtask).appendTo(".right_subtask")
       })
       for( let i = 0; i < $(".right_subtask").children().length; i++){
           if(+$(".item_subtask").eq(i).children(".status_ckb").text()=== 1){
            $(".item_subtask").eq(i).children(".box_subtask").children(".task-check").hide();
            $(".item_subtask").eq(i).children(".box_subtask").children(".checkdele").show();
           }
           else{
            $(".item_subtask").eq(i).children(".box_subtask").children(".task-check").show();
            $(".item_subtask").eq(i).children(".box_subtask").children(".checkdele").hide();
           }
       }

}



$(".sort_center").click(function(){
    $("#todo").html('');
    list_center.sort(function(a, b){
       
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB){ 
        console.log("123"); 
            return -1 
        }
        if (nameA > nameB){
        console.log("321");
            return 1
        }
 
        
    })  
 
showtaskbyid(list_center);
    })  


$(".right_subtask" ).on("click",".box_subtask",function(){
    let text_id_list_subtask = $(this).parent().children().eq(2).text();
    if(+$(this).parent().find(".status_ckb").text() === 0 ){
        $(".right_subtask" ).html("")
       list_subtask.forEach(task =>{
             if(task.id_subtask === +text_id_list_subtask ){
                        $(".right_subtask" ).html("")
                    task.status_ckb = 1;
               }   
       })
        
    }
    else{
            list_subtask.forEach(task =>{
                if(task.id_subtask === +text_id_list_subtask ){
                task.status_ckb = 0;
            }
           
        })

    }
    show_subtask_byid(list_subtask);
})

