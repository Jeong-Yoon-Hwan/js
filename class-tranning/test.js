const count = 1;
class student {
  constructor(name,birth,ncs,classRoom,phoneNum,email,className,startDate,endDate){
    this.이름 = name;
    this.생년월일 = birth;
    this.NCS직종 = ncs;
    this.훈련강의실 = classRoom;
    this.연락처 = phoneNum;
    this.이메일 = email;
    this.훈련강의명 = className;
    this.훈련시작일 = startDate;
    this.훈련종료일 = endDate;
    this.훈련생번호 = classRoom.slice(0,3)+"-"+count
  }

 
  get name(){ return this.name; }
  set name(val){
    if(typeof val === "string"){
      this._name = val;
    }else{
      console.log('name은 문자열을 입력하세요')
    }
  }

  get birth(){ return this.birth; }
  set birth(val){
    if(typeof val === "string" && val.length === 8){
      this._birth = val
    }else{
      console.log('년,월,일 8자리 문자열로 입력하세요')
    }
  }
  
  get ncs(){ return this.ncs }
  set ncs(val){
    this._ncs = val
  }

  get classRoom(){ return this.className }
  set classRoom(val){
    if(typeof val === 'string'){
      this._classRoom = val
    }else{
      console.log('classRoom 은 문자열로 입력하세요')
    }
  }

  get phoneNum(){ return this.phoneNum }
  set phoneNum(val){
    if(typeof val === 'string' ){
      if(val[3] === '-' && val[8] === '-' && val.length === 13){
        this._phoneNum = val
      }else{
        this._phoneNum = val.slice(0,3) + '-' + val.slice(3,7) + "-" + val.slice(7,11)
      }
    }
  }

  get email(){ return this.email }
  set email(val){
    if(typeof val === 'string'){
      this._email = val
    }
  }

  get className(){ return this.className }
  set className(val){
    if(typeof val === 'string'){
      this._className = val;
    }
  }

  get startDate(){ return this.startDate }
  set startDate(val){
    if(typeof val === 'string'){
      if(val[4] === '-' && val[7] === '-'){
        this._startDate = val;
      }else{
        this._startDate = val.slice(0,4) + "-" + val.slice(4,6) + "-" + val.slice(6,8)
      }
    }
  }

  get endDate(){ return this.endDate }
  set endDate(val){
    if(typeof val === 'string'){
      if(val[4] === '-' && val[7] === '-'){
        this._endDate = val;
      }else{
        this._endDate = val.slice(0,4) + "-" + val.slice(4,6) + "-" + val.slice(6,8)
      }
    }
  }

}


const std = new student(
  'yoonhwan',
  '19950902',
  {번호:'1',이름:'정보기술개발'},
  `305호`,
  '01057424547',
  'jung@gmail.com',
  'K-ONG minam Tranning',
  '20220719',
  '20230105'
  )


console.log(std)
