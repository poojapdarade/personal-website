import { PageLayout } from "../components/PageLayout";
import "./LearningGit.css";

export function LearningGit() {
  return (
    <PageLayout title="Understanding Git">
      <div className="learning-git article">
        <p>
          I've gained a solid understanding of Git and regularly use it to
          manage my projects. In this section, I’m documenting useful Git
          commands and best practices that I’ve learned while building my
          website.
        </p>
        <img
          className="article-image"
          src="/cartoonGirl.jpeg"
          alt=" Cartoon girl studying technology"
        />

        <p>Commands:</p>
        <ol>
          <li>
            git add :<p>-A is use to add al the changes to the staging area</p>
          </li>
          <li>git status</li>
          <li>
            git push:
            <p>
              {" "}
              -f stands for force. this flag forces the changes from your local
              repository to remote repository
            </p>
          </li>
          <li>
            git commit: <p>-m is used to add the commit message</p>
            <p>--amend is used to amend changes to the most recent commit</p>
            <p>
              --no-edit means most recent message stays unchanged in the most
              recent commit
            </p>
          </li>
          <li>git clone</li>
          <li>git log</li>
          <li>git pull</li>
          <li>
            git branch:<p>-D is use to delete the branch</p>
          </li>
          <li>
            git checkout :
            <p>
              -b branch-name is used to create a new branch and jump into it
              straight away
            </p>
          </li>
          <li>git merge</li>
          <li>git remote</li>
          <li>git fetch</li>
          <li>git reset</li>
          <li>git diff</li>
        </ol>

        <h2>
          <p>
            Detailed description of the commands I know which are listed above:
          </p>
          <code>git add</code>
        </h2>
        <p>
          In Git, the <code>git add</code> command is used to stage changes for
          the next commit. When you make modifications to your project, such as
          adding new files or editing existing ones, these changes are initially
          untracked by Git. By using `git add`, you inform Git that you want to
          include these changes in the next commit. Staging changes allows you
          to selectively choose which modifications should be part of the next
          snapshot of your project. This separation between working directory
          changes and the staging area provides flexibility and precision in
          crafting commits, as it enables you to commit specific changes while
          keeping others uncommitted for further refinement.
        </p>
        <p>git add &lt;file-name&gt; (to add a specific file)</p>
        <p>
          git add -A (adds all changed files to staging ready to be committed)
        </p>
        <h2>
          <code>git status</code>
        </h2>
        <p>
          The git status command in Git provides a comprehensive overview of the
          current state of your repository. When executed, it displays
          information about any changes in your working directory compared to
          the last committed version. This includes untracked files,
          modifications to tracked files, and files that are staged for the next
          commit. git status is a valuable tool for understanding the status of
          your project, helping you keep track of changes, and guiding you on
          what actions are needed, such as committing changes or adding files to
          the staging area. It provides a snapshot of the repository's status,
          allowing you to make informed decisions about the next steps in your
          version control workflow. For example, if you have added a file to git
          by using git add ''file_name'' and also do a git commit when you do
          git status it will show a message ''branch is one ahead'' of origin
        </p>
        <h2>
          <code>git push</code>
        </h2>
        <p>
          The git push command is used in Git to upload the committed changes
          from your local repository to a remote repository. It enables you to
          synchronize your work with a shared or central repository, making your
          changes accessible to others collaborating on the project. By
          specifying the remote repository and branch you want to push to, such
          as git push origin master, you update the corresponding branch on the
          remote with your local commits, ensuring that both repositories are in
          sync and reflecting the latest state of the project.
        </p>
        <h2>
          <code>git commit</code>
        </h2>
        <p>
          The git pull command in Git is used to fetch and merge changes from a
          remote repository into your local working branch. When you run git
          pull, it automatically combines the git fetch command, which retrieves
          the latest changes from the remote repository, with the git merge
          command, which incorporates those changes into your local branch. This
          ensures that your local copy is updated with the most recent
          modifications from the remote repository, providing a seamless way to
          keep your local branch in sync with the collaborative development
          happening in the shared repository.
        </p>
        <h2>
          <code>git clone</code>
        </h2>
        <p>
          The git clone command in Git is used to create a copy of a remote
          repository on your local machine. When you run git clone, it not only
          copies the repository but also sets up a connection to the remote,
          allowing you to fetch and pull changes from the original repository.
          This command is commonly used when starting a new project or when you
          want to contribute to an existing one. The cloned repository contains
          the entire project history, branches, and files, providing you with a
          complete and independent working copy that you can modify and
          contribute to while maintaining a link to the original repository for
          updates.
        </p>
        <h2>
          <code>git log</code>
        </h2>
        <p>
          It returns the git commit history, each log contains when the change
          happened, who did it and also the commit message.
        </p>
        <h2>
          <code>git pull</code>
        </h2>
        <p>
          The git pull command in Git is used to fetch and merge changes from a
          remote repository into your local working branch. When you run git
          pull, it automatically combines the git fetch command, which retrieves
          the latest changes from the remote repository, with the git merge
          command, which incorporates those changes into your local branch. This
          ensures that your local copy is updated with the most recent
          modifications from the remote repository, providing a seamless way to
          keep your local branch in sync with the collaborative development
          happening in the shared repository.
        </p>
        <h2>
          <code>git branch</code>
        </h2>
        <p>
          The git branch command is used to create, list, and delete branches.
          Branches allow developers to work on their code and create commits in
          isolation
        </p>
        <p>
          To delete a branch we use <code>git branch -D branch_name</code>{" "}
          command.
        </p>
        <h2>
          <code>git checkout</code>
        </h2>
        <p>
          The git checkout command is used to navigate between branches. You can
          use
          <code>git checkout -b branch_name</code> command to create and jump to
          a new branch.
        </p>
        <h2>
          <code>git merge</code>
        </h2>
        <p>
          <code>git merge branch_name</code> takes commits from branch_name into
          current branch.
        </p>
      </div>
    </PageLayout>
  );
}
