import { TaskDto } from './create-task.dto';

describe('TaskDto', () => {
  it('should be defined', () => {
    expect(new TaskDto()).toBeDefined();
  });
});
