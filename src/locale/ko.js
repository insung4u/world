export default {
  common: {
    siteName: 'World',
    modify: '수정',
    delete: '삭제',
    list: '목록',
    write: '등록',
    cancel: '취소',
  },
  validate: {
    emptyUsername: '사용자 이름을 입력해주세요.',
    lengthUsername: '사용자 이름은 1자 이상 20자 이하로 입력해주세요.',
    emptyEmail: '이메일을 입력해주세요.',
    notEmail: '이메일 형식이 맞지 않습니다.',
    emptyPassword: '비밀번호를 입력해주세요',
    lengthPassword: '비밀번호는 8자 이상으로 입력해주세요.',
    emptyTitle: '제목을 입력해주세요.',
    emptyDescription: '설명을 입력해주세요.',
    emptyBody: '내용을 입력해주세요.',
  },
  components: {
    like: {
      actionText: '좋아요',
    },
    comment: {
      heading: '댓글',
      loginMsg: '댓글을 남기려면 <1>로그인</1>이 필요합니다.',
      confirmDelete: '댓글을 삭제하시겠습니까?',
      errorDelete: '삭제에 실패했습니다.',
      placeHolder: '댓글을 입력하세요..',
      submit: '등록',
      noItem: '등록된 댓글이 없습니다.',
      errorWrite: '등록에 실패했습니다.',
    },
    pagination: {
      first: '처음',
      prev: '이전',
      next: '다음',
      last: '마지막',
    },
    profileInfo: {
      follow: 'Follow',
      unfollow: 'Follow',
      profile: '프로필 수정',
    },
  },
  header: {
    menu: '메뉴',
    home: 'Home',
    write: '글등록',
    profile: '프로필',
    logout: '로그아웃',
    login: '로그인',
    join: '회원가입',
  },
  footer: {
    heading: '푸터',
  },
  home: {
    myfeed: '내 담벼락',
    globalfeed: '전체 글목록',
    needLogin: '로그인 필요',
    loginMsg: '내 담벼락은 로그인 후에 보실 수 있습니다.',
    hotTag: '인기 태그',
  },
  article: {
    confirmDelete: '삭제하시겠습니까?',
    canAuthorDelete: '작성자만 삭제할 수 있습니다.',
    errorDelete: '삭제에 실패했습니다.',
  },
  form: {
    headingWrite: '글 등록하기',
    headingModify: '글 수정하기',
    title: '제목',
    description: '설명',
    body: '내용',
    tag: '태그',
    sending: '등록 중...',
    errorModifyAuth: '수정 권한이 없습니다.',
    errorWrite: '등록에 실패했습니다.',
  },
  join: {
    heading: '회원가입',
    username: '사용자 이름',
    email: '이메일',
    password: '비밀번호',
    sending: '회원가입 중...',
    join: '회원가입',
    infoDesc: '이미 계정이 있으신가요? <1>로그인</1>을 해주세요.',
  },
  login: {
    heading: '로그인',
    email: '이메일',
    password: '비밀번호',
    sending: '로그인 중...',
    login: '로그인',
    infoDesc: '처음 오셨나요? <1>회원가입</1>을 해주세요.',
    invalidLoginInfo: '이메일 또는 패스워드가 틀렸습니다.',
    loginFail: '로그인에 실패했습니다.',
    needLogin: '로그인이 필요합니다.',
  },
  profile: {
    myArticles: '등록 한 글',
    favoritedArticles: '좋아하는 글',
  },
  profileEdit: {
    heading: '프로필 수정',
    image: '프로필 이미지',
    imageURL: '프로필 이미지 URL',
    username: '사용자 이름',
    bio: '소개',
    email: '이메일',
    newPassword: '새 비밀번호',
    sending: '저장하는 중...',
  },
}