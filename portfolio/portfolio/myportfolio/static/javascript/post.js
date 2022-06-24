function searchParam(key) {
    return new URLSearchParams(location.search).get(key);
  };

const searchText = document.querySelector('#searchText');
searchText.value = searchParam('searchContents');

var clickIndex = 0;
var inputPwd = "";
var dbPwd = "";
var mode = "";

const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close');
btnClose.addEventListener('click', () => {
    modal.style.display = "none";

  });

const btnCheck = document.querySelector('.check');
btnCheck.addEventListener('click', () => {
    var v = document.getElementById('index');
    v.value = clickIndex;
    inputPwd = document.querySelector('#modal_pwd').value
   
    var contents = document.querySelector('contents');
    
    if(inputPwd === dbPwd){
        modal.style.display = "none";
        if(mode === "update"){
            var textArea = document.querySelector(`#textArea${clickIndex}`)
            textArea.removeAttribute('disabled');
            var updateFinishBtn = document.querySelector(`#updateFinishBtn${clickIndex}`);
            updateFinishBtn.style.display ='inline';
            var updateBtn = document.querySelector(`#updateBtn${clickIndex}`);
            updateBtn.style.display = 'none';

            textArea.style.backgroundColor = "rgba(248, 254, 255, 0.33)";


        }else{
            var deleteMode = document.getElementById('postID');
            deleteMode.action ="deletePost";    
            deleteMode.submit();
        }
    }
    else{
        modal.style.display = "none";
        alert("비밀번호가 틀렸습니다.");
    }

});

function updateContents(){
    var contents = document.querySelector('#contents');
    var textArea = document.querySelector(`#textArea${clickIndex}`);
    
    contents.value = textArea.value;

    var updateMode = document.getElementById('postID');
    updateMode.action ="updatePost";

    if(window.confirm("정말 수정하시겠습니까?")){   
        updateMode.submit();
    }

}

function getID(obj){
    document.querySelector('#modal_pwd').value = "";
    modal.style.display = 'block';
    clickIndex = obj.id;
    dbPwd = obj.pwd;
    mode = obj.mode;
}    

function inputBtn(){
    var name = document.querySelector('#textName');
    var pwd = document.querySelector('#textPwd');
    

    var input = document.getElementById('inputPostID');

    if (name.value === "" || pwd.value === ""){
        alert("이름과 비밀번호를 입력해주세요.");
    }else{

    alert("등록이 완료되었습니다.");
    input.submit();
 
    }

    
}
