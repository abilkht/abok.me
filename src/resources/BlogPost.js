export default {
  post(id) {
    return {
      path: `/post/${id}.json`,
      resolve: (response, mappers) => {
        let { title, content, meta } = response.results[0];
        content = '<p>' + content.split('\n').join('</p><p>') + '</p>';
        content = content.split('tochka').join('<br>');
        return mappers.merge({ title, content, ...meta })
      }
    }
  }
}
