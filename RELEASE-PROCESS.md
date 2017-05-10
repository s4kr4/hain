# Release Process

This document describes the process of releasing Hain.  
Maintainers can refer to this document to release a new version of Hain.

## Versioning
Hain is aiming for `Semantic Versioning` in versioning.  
You can use the version name in `vX.Y.Z` format.

## API version
Hain is exposing the API for the plugin, and it also has the API version for each build.  
Depending on the addition or change of the API, the API version may be changed.  
and also the list of compatible API versions may be changed.  
You can see the compatible API versions in the `_apiVersions` field in `app/package.json` file.

## How to release
1. Increase the version of Hain in `app/package.json` file.
2. Check and update the list of API versions in `app/package.json` file. (it may not need to be updated)
3. Commits the modifications that reflect the above, tags the commit with new version name, and pushes it.
4. As soon as you push the tag, `Travis CI` and `AppVeyor` build the commit, and the executables will be uploaded as a Draft in Github Releases
5. Write a description of the modifications in the Draft Description, publish the Draft and release a new version of Hain.

> Note: All released commits must be merged into the `master` branch.
