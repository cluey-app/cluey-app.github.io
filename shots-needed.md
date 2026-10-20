# 사이트에 넣을 화면 사진 · 움직이는 그림 목록

페이지의 점선 상자(`data-shot="이름"`)가 들어갈 자리입니다. 사진은 PNG(가능하면 1280 너비, 2배로 캡처하면 선명), 움직이는 그림은 APNG(움직이는 PNG, 장면 넘김식, 무한 반복, 3MB 이하)로 넣습니다.
일상 메모 내용(장보기, 여행 준비 등)으로 찍고, 업무 내용 · 실명 · 회사 이름 · 이메일은 쓰지 않습니다.
사진을 넣을 때는 상자(`<figure class="shotfig">` 안의 `.ph`)를 `<img src="..." alt="설명" width="1280" height="720" loading="lazy">` 로 바꿉니다. APNG 도 같은 `<img>` 입니다.


(완료) 표시는 `img/shots/<이름>.png` 로 넣은 것입니다. 2배(2560 너비)로 찍었고 페이지에는 1280 x 720 (hero-main 은 1280 x 800, 블록 APNG 셋은 960 x 540) 으로 넣었습니다. APNG 는 Qt 가 찍은 PNG 장면을 `tools/apng.py` 가 이어 붙인 것입니다(Pillow · ffmpeg 없이). mcp-claude-example · api-key-curl · together-overview 는 HTML 로 그려 Qt 로 찍은 그림입니다. 다시 찍으려면 Cluey 저장소의 `tools/site_shots.py` 를 돌립니다.

| 이름 | 쪽 | 종류 | 크기 | 무엇을 보여 주나 |
|---|---|---|---|---|
| templates-pick (완료) | features/templates.html | PNG | 1280x720 | 새 메모 + 옆 ▾ 메뉴를 펼친 모습. 묶음 제목(하루 · 계획 · 일)과 양식 이름이 보이게. |
| deco-dialog (완료) | features/templates.html | PNG | 1280x720 | 꾸미기 작은 창을 연 모습과 뒤의 메모 미리보기. 하루 일기에 종이 바탕 + 색 띠 + 이모지를 적용한 상태. |
| tasks-due-picker (완료) | features/tasks.html | PNG | 1280x720 | 할 일 줄에서 ~ 를 친 직후의 고르기 창. 왼쪽 빠른 날짜, 오른쪽 달력. |
| tasks-list (완료) | features/tasks.html | PNG | 1280x720 | 할 일 탭 화면. 여러 메모의 할 일이 모이고 기한이 오늘인 것이 눈에 띄게. |
| sticky-desktop (완료) | features/sticky.html | PNG | 1280x720 | 바탕화면 위에 색이 다른 스티커 2~3개를 겹치지 않게 놓은 모습. 일상 메모(장보기, 오늘 할 일)로. |
| table-resize (완료) | features/blocks.html | APNG | 960x540 | 표의 열 경계를 마우스로 끄는 3~4초 반복 영상. 끄는 동안 양옆 두 열만 변하는 것이 보이게. |
| mindmap-demo (완료) | features/blocks.html | APNG | 960x540 | 빈 마인드맵에서 Tab, Enter 로 가지 5~6개를 만드는 5초 반복 영상. |
| columns-demo (완료) | features/blocks.html | APNG | 960x540 | /2단 입력, 왼쪽에 목록, 오른쪽에 표를 쓰는 5초 반복 영상. |
| search-chosung (완료) | features/search.html | PNG | 1280x720 | 검색창에 초성 4글자를 친 목록 화면. 찾은 낱말에 형광펜이 칠려 보이게. |
| lock-dialog (완료) | features/lock.html | PNG | 1280x720 | 잠그기 창. 비밀번호 두 칸, 힌트 칸, 잊으면 열 수 없다는 안내 문장이 보이게. |
| sync-account (완료) | features/sync.html | PNG | 1280x720 | 설정 > 계정 화면. 닉네임, 이메일, 다른 PC 로그아웃, 로그아웃, 탈퇴 단추가 보이게. 개인 정보는 가짜 값으로. |
| share-dialog (완료) | features/share.html | PNG | 1280x720 | 폴더 공유 창. 친구 두 명, 한 명은 고치기, 한 명은 보기만으로 둔 상태. 이름은 가짜로. |
| share-editing (완료) | features/share.html | PNG | 1280x720 | 공유 폴더의 메모 위에 '○○ 님이 고치는 중' 표시가 뜬 화면. |
| mcp-settings (완료) | features/mcp.html | PNG | 1280x720 | 설정 > AI 연결. 켜기 스위치, 도구 목록(Claude Code, Claude 데스크톱, Codex)과 [연결] 단추, 숨긴 폴더, 최근 기록이 보이게. 접속 키는 가려진 채로. |
| mcp-connect-confirm (완료) | features/mcp.html | PNG | 1280x720 | [연결]을 눌렀을 때 뜨는 확인 창. 넣을 파일 경로, 넣을 내용(키는 가림), 백업 안내 문장이 보이게. |
| mcp-claude-example (완료) | features/mcp.html | PNG | 1280x720 | 실제 Claude 화면이 아니라 상표 없는 'AI 도구와 대화' 그림. '지난주 메모 중 여행 준비한 것 찾아서 정리해 줘' → Cluey 에서 찾는 중(cluey_search) → 정리된 답. 찾은 메모 칸은 Cluey MCP 를 실제로 부른 결과. 캡션에 그림임을 밝힘. |
| api-key-create (완료) | features/apikey.html | PNG | 1280x720 | 새 API 키 창. 이름, 할 수 있는 일(읽기만 / 읽기 + 새 메모), 볼 폴더, 기한이 보이게. |
| api-key-curl (완료) | features/apikey.html | PNG | 1280x720 | 명령 프롬프트 모양 그림에 search 를 부른 JSON 결과. 응답은 이 PC 안에 띄운 서버 코드(wrangler dev --local)에 실제로 부른 그대로, 키는 clk_••••xxxx 로 가림. |
| feature-tour (완료) | index.html | APNG | 1280x720 | Cluey 를 켜서 새 메모에 쓰고, ~ 로 기한을 정하고, 할 일 탭과 검색을 보여 주는 12초 이내 반복 영상. |
| templates-gallery (완료) | index.html | PNG | 1280x720 | 하루 일기, 데일리 플래너, 독서 기록, 프로젝트 기획 양식으로 쓴 메모를 나란히. 위 네 카드를 실제 화면으로 바꿀 자리. |
| together-overview (완료) | index.html | PNG | 1280x720 | PC 두 대와 친구 PC, 가운데 서버를 그린 간단한 도식. 잠긴 메모는 자물쇠가 채워진 채 지나간다는 표시. |
| tips-shortcuts (완료) | tips.html | PNG | 1280x720 | 앱 안 도움말의 단축키 표 화면, 또는 따로 만든 단축키 카드 이미지. |
| compare-screens (완료) | compare.html | PNG | 1280x720 | Cluey 에서 쓴 회의록 화면 한 장. (다른 프로그램 화면은 쓰지 않는다.) |
| hero-main (완료) | index.html | PNG | 1280x800 | 첫 화면 오른쪽의 그림. 지금은 HTML 로 그린 모형(`.mock`). 실제 화면(폴더 목록, 회의 메모, 할 일 표시)으로 바꾸려면 `.mock` 전체를 이미지로 교체. 일상 메모로. |
