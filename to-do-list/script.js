// 1. 데이터 저장 공간
var users = []; // 가입한 아이디들을 담는 배열

// 2. 일정 추가 함수 (FR1)
function addTodo() {
    var input = document.getElementById("todoInput");
    var display = document.getElementById("todoDisplay");

    if (input.value == "") {
        alert("내용을 입력해주세요!");
        return;
    }

    // 새로운 줄(li) 만들기
    var li = document.createElement("li");
    li.innerHTML = input.value + ' <button class="del-btn" onclick="deleteTodo(this)">X</button>';
    
    // 화면에 추가
    display.appendChild(li);
    input.value = ""; // 입력창 비우기
}

// 3. 일정 삭제 함수 (FR2)
function deleteTodo(button) {
    // 클릭된 버튼의 부모(li)를 찾아서 삭제
    var targetLi = button.parentElement;
    targetLi.remove();
}

// 4. 회원가입 함수 (회원가입 FR1, 2, 3)
function joinMember() {
    var id = document.getElementById("joinId").value;
    var pw = document.getElementById("joinPw").value;

    // 아이디 중복 체크 (FR2)
    for (var i = 0; i < users.length; i++) {
        if (users[i] == id) {
            alert("이미 있는 아이디입니다!");
            return;
        }
    }

    // 비밀번호 규칙 체크: 8자 이상 (FR3)
    if (pw.length < 8) {
        alert("비밀번호는 최소 8자 이상이어야 합니다!");
        return;
    }

    // 모든 조건을 통과하면 배열에 저장 (FR1)
    users.push(id);
    alert(id + "님, 가입을 축하합니다! (현재 회원수: " + users.length + "명)");
    
    // 입력창 초기화
    document.getElementById("joinId").value = "";
    document.getElementById("joinPw").value = "";
}