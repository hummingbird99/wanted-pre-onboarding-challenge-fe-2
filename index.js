//@ts-check
/**
 * 할 일을 추가합니다.
 * @param {string} content - 내용
 */
function addTodo(content) {}

/**
 * 할 일을 조회합니다.
 * @param {number} id - 사용자 아이디
 */
function getToDoList(id) {}

/**
 * 내용, 완료 여부, 카테고리, 태그들을 수정합니다.
 * @param {object} updatedTodo - 수정된 할 일
 * @param {number} id - 사용자 아이디
 * @param {boolean} isCompleted - 완료 여부
 * @param {string[]} categories - 카테고리
 * @param {string[]} tags - 태그들
 */
function updateTodo(updatedTodo, id, isCompleted, categories, tags) {}

/**
 * ID를 기반으로 특정 할 일을 삭제합니다.
 * @param {number} id - 사용자 아이디
 */
function deleteTodo(id) {}

/**
 * 모든 할 일을 삭제합니다.
 */
function deleteAllTodos() {}

/**
 * 특정 할 일의 특정 태그를 삭제합니다.
 * @param {number} id - 사용자 아이디
 * @param {string[]} tagName - 특정 태그
 */
function deleteTag(id, tagName) {}

/**
 * 특정 할 일의 모든 태그를 삭제합니다.
 * @param {number} id - 사용자 아이디
 */
function deleteAllTags(id) {}
