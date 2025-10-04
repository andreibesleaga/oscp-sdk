# Changelog

## 0.7.4-beta (2025-10-04)

Full Changelog: [v0.7.3-beta...v0.7.4-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.7.3-beta...v0.7.4-beta)

### Chores

* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([1e8e3e8](https://github.com/andreibesleaga/oscp-sdk/commit/1e8e3e8d2c40e75f7cbf95a6f4ba7030644d38f8))

## 0.7.3-beta (2025-10-01)

Full Changelog: [v0.7.2-beta...v0.7.3-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.7.2-beta...v0.7.3-beta)

### Bug Fixes

* **mcp:** fix cli argument parsing logic ([48f1866](https://github.com/andreibesleaga/oscp-sdk/commit/48f186622a08335110d09f786ee478cdd5725a20))
* **mcp:** resolve a linting issue in server code ([e9d61dd](https://github.com/andreibesleaga/oscp-sdk/commit/e9d61dd3dfc14784c2a429254ef77178d5dbf104))


### Chores

* **internal:** codegen related update ([7906c35](https://github.com/andreibesleaga/oscp-sdk/commit/7906c358f1f68d6932595d093b030b9dd246272b))
* **internal:** ignore .eslintcache ([a93d8b5](https://github.com/andreibesleaga/oscp-sdk/commit/a93d8b578006ad4ecb400094dccee86cd337cc01))
* **mcp:** allow pointing `docs_search` tool at other URLs ([4f7a989](https://github.com/andreibesleaga/oscp-sdk/commit/4f7a989ac9afef961839fff1566d47b012c2f750))
* update lockfile ([b5a5489](https://github.com/andreibesleaga/oscp-sdk/commit/b5a548991c65c025af94ed775332ca63a59bddc7))

## 0.7.2-beta (2025-09-27)

Full Changelog: [v0.7.1-beta...v0.7.2-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.7.1-beta...v0.7.2-beta)

### Chores

* **internal:** fix incremental formatting in some cases ([53f1886](https://github.com/andreibesleaga/oscp-sdk/commit/53f1886f5e9ab070430bf5d423d26d932ec8b518))

## 0.7.1-beta (2025-09-26)

Full Changelog: [v0.7.0-beta...v0.7.1-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.7.0-beta...v0.7.1-beta)

### Performance Improvements

* faster formatting ([75f0281](https://github.com/andreibesleaga/oscp-sdk/commit/75f0281a353065e2a03978c852e8c1f51963a080))


### Chores

* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([b4ed9b2](https://github.com/andreibesleaga/oscp-sdk/commit/b4ed9b28b6bd09196242557d428ed67f0f9346aa))

## 0.7.0-beta (2025-09-24)

Full Changelog: [v0.6.0-beta...v0.7.0-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.6.0-beta...v0.7.0-beta)

### Features

* **mcp:** add option for including docs tools ([31f769f](https://github.com/andreibesleaga/oscp-sdk/commit/31f769fe8a9864f40224befb80620a945d853f3d))
* **mcp:** enable experimental docs search tool ([c6f66fc](https://github.com/andreibesleaga/oscp-sdk/commit/c6f66fcd22c28f29fe93c6b30196e1f50862a827))

## 0.6.0-beta (2025-09-20)

Full Changelog: [v0.5.3-beta...v0.6.0-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.5.3-beta...v0.6.0-beta)

### Features

* **mcp:** add docs search tool ([e83254e](https://github.com/andreibesleaga/oscp-sdk/commit/e83254ea7d5933a32363543a8daa1e0904767719))


### Chores

* **codegen:** internal codegen update ([3b49070](https://github.com/andreibesleaga/oscp-sdk/commit/3b49070a6e6707a317e926bc952e9a32d7db9c42))
* do not install brew dependencies in ./scripts/bootstrap by default ([0463235](https://github.com/andreibesleaga/oscp-sdk/commit/04632355552042cd13c072e85d06c6a5001debdf))
* **internal:** gitignore .mcpb files ([47f68c5](https://github.com/andreibesleaga/oscp-sdk/commit/47f68c58e35754696e140ae5818a4f57196d283a))

## 0.5.3-beta (2025-09-18)

Full Changelog: [v0.5.2-beta...v0.5.3-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.5.2-beta...v0.5.3-beta)

### Bug Fixes

* **ci:** set permissions for DXT publish action ([798e2e9](https://github.com/andreibesleaga/oscp-sdk/commit/798e2e96c620a877d93a80718fd6975902169c00))


### Chores

* **mcp:** rename dxt to mcpb ([7fadee0](https://github.com/andreibesleaga/oscp-sdk/commit/7fadee020e08865744ed15b77135bb392d57ddd5))

## 0.5.2-beta (2025-09-12)

Full Changelog: [v0.5.1-beta...v0.5.2-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.5.1-beta...v0.5.2-beta)

### Bug Fixes

* **mcp:** fix uploading dxt release assets ([cfb4859](https://github.com/andreibesleaga/oscp-sdk/commit/cfb48592df8fe46b39e15677f6bfc29e21cedd04))


### Chores

* **mcp:** upload dxt as release asset ([c2f19d8](https://github.com/andreibesleaga/oscp-sdk/commit/c2f19d8280cb1682aa94ace593e669d31543484d))

## 0.5.1-beta (2025-09-09)

Full Changelog: [v0.5.0-beta...v0.5.1-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.5.0-beta...v0.5.1-beta)

### Bug Fixes

* coerce nullable values to undefined ([f363b08](https://github.com/andreibesleaga/oscp-sdk/commit/f363b084cf82297f34e5a75591eca5909c0cbc7a))
* **mcp:** update dxt manifest.json files ([6c5d523](https://github.com/andreibesleaga/oscp-sdk/commit/6c5d523e0d82ae781286c2b724f515c76d269ad6))

## 0.5.0-beta (2025-09-06)

Full Changelog: [v0.4.1-beta...v0.5.0-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.4.1-beta...v0.5.0-beta)

### Features

* **mcp:** allow setting logging level ([cfb20e1](https://github.com/andreibesleaga/oscp-sdk/commit/cfb20e18af9c6ee3a1521622de6080c55a3df2fa))
* **mcp:** expose client options in `streamableHTTPApp` ([8436190](https://github.com/andreibesleaga/oscp-sdk/commit/8436190b03beaca5e6c345ba6080aeed63bce827))


### Bug Fixes

* **mcp:** fix query options parsing ([94422f1](https://github.com/andreibesleaga/oscp-sdk/commit/94422f1ed37ccfe257cdc020a80883a932a11f20))


### Chores

* ci build action ([1ce21cf](https://github.com/andreibesleaga/oscp-sdk/commit/1ce21cf12c2cb678c41a5ce2b42b35c5d4fd8ead))
* **internal:** codegen related update ([88052f5](https://github.com/andreibesleaga/oscp-sdk/commit/88052f5a1a2d7570462d283bb11995a0d15ce1fb))
* **internal:** codegen related update ([5dafbd5](https://github.com/andreibesleaga/oscp-sdk/commit/5dafbd5468480987531c98d312f6359a087c6dc3))
* **internal:** update global Error reference ([b51d86e](https://github.com/andreibesleaga/oscp-sdk/commit/b51d86e253fb6fd6c912a7fa02f0bbebb89c1490))

## 0.4.1-beta (2025-08-25)

Full Changelog: [v0.4.0-beta...v0.4.1-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.4.0-beta...v0.4.1-beta)

## 0.4.0-beta (2025-08-24)

Full Changelog: [v0.3.0-beta...v0.4.0-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.3.0-beta...v0.4.0-beta)

### Features

* **mcp:** add code execution tool ([0dec4cc](https://github.com/andreibesleaga/oscp-sdk/commit/0dec4cc338b64dae90d15cf9b54b1e933f8f2bd0))
* **mcp:** add option to infer mcp client ([b207dca](https://github.com/andreibesleaga/oscp-sdk/commit/b207dca553590fa47742a053889e4dd55b4f45d4))


### Chores

* add package to package.json ([c834ddf](https://github.com/andreibesleaga/oscp-sdk/commit/c834ddfcbcfa15920c2dfdee58c085cfb570d23e))
* **client:** qualify global Blob ([b249988](https://github.com/andreibesleaga/oscp-sdk/commit/b24998801dc1942397a80823c4049a3257392a3f))
* **internal:** codegen related update ([53e980e](https://github.com/andreibesleaga/oscp-sdk/commit/53e980ef6553955940c2d85f9dcc197ba657a870))
* **internal:** codegen related update ([49563e2](https://github.com/andreibesleaga/oscp-sdk/commit/49563e2025faa4a7f8f733e23346cb991011b37a))
* **internal:** make mcp-server publishing public by defaut ([6b3ce72](https://github.com/andreibesleaga/oscp-sdk/commit/6b3ce720afcd75fd57858e81121c626eded46a0c))
* **mcp:** add cors to oauth metadata route ([3f3b391](https://github.com/andreibesleaga/oscp-sdk/commit/3f3b39163ff877e63e5a1ec0b6b06180527aada9))
* **mcp:** update package.json ([f04660d](https://github.com/andreibesleaga/oscp-sdk/commit/f04660dbb36ad7ba3a0aaaafc505071afc546311))
* **mcp:** update types ([0762b0e](https://github.com/andreibesleaga/oscp-sdk/commit/0762b0e6216a5d23e0f01a5648f0effe7fbe95f2))
* update CI script ([98b7153](https://github.com/andreibesleaga/oscp-sdk/commit/98b7153d0416df3612e4b190c6ad91517e72ff89))

## 0.3.0-beta (2025-08-19)

Full Changelog: [v0.2.1-beta...v0.3.0-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.2.1-beta...v0.3.0-beta)

### Features

* **mcp:** parse query string as mcp client options in mcp server ([846df3e](https://github.com/andreibesleaga/oscp-sdk/commit/846df3e8386b91c90188a407a9f22bcbf1082f33))


### Chores

* **deps:** update dependency @types/node to v20.17.58 ([3c2f65e](https://github.com/andreibesleaga/oscp-sdk/commit/3c2f65e00344b3d141ac640282ca5ccd183a0e99))
* **internal:** codegen related update ([6d96340](https://github.com/andreibesleaga/oscp-sdk/commit/6d96340a057187e382b8db27ceaa84834c8cb075))
* **internal:** formatting change ([597a560](https://github.com/andreibesleaga/oscp-sdk/commit/597a56089c79cdee4583ead6a0d4f357d659e1dd))
* **internal:** refactor array check ([391893b](https://github.com/andreibesleaga/oscp-sdk/commit/391893b45ec61cf0e52e59bdf312ed0ac5b8fc89))
* **internal:** update comment in script ([913cb8d](https://github.com/andreibesleaga/oscp-sdk/commit/913cb8db1c31d657863f57b8863353f0c5ea0ff6))
* **mcp:** document remote server in README.md ([ac5ab57](https://github.com/andreibesleaga/oscp-sdk/commit/ac5ab5728a26f82e782e8142b18e3e26ba71723d))
* **mcp:** minor cleanup of types and package.json ([dcf10ca](https://github.com/andreibesleaga/oscp-sdk/commit/dcf10ca5926cc30bd00cd44e26dd6899ac482906))
* **mcp:** update README ([dc3d6f9](https://github.com/andreibesleaga/oscp-sdk/commit/dc3d6f916cf090766ddef4bb5d01594c58b11b32))
* update @stainless-api/prism-cli to v5.15.0 ([5c8427f](https://github.com/andreibesleaga/oscp-sdk/commit/5c8427ffe210ba5cfc90e965bdd318561e2b994b))

## 0.2.1-beta (2025-08-07)

Full Changelog: [v0.2.0-beta...v0.2.1-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.2.0-beta...v0.2.1-beta)

### Features

* **mcp:** add logging when environment variable is set ([9d56475](https://github.com/andreibesleaga/oscp-sdk/commit/9d564752a1efe70b0dad973bb9c55435a8f7c124))
* **mcp:** add unix socket option for remote MCP ([fa16ad9](https://github.com/andreibesleaga/oscp-sdk/commit/fa16ad9056a8f75b67cd2563b27ca788f20e4069))
* **mcp:** remote server with passthru auth ([aaf73ca](https://github.com/andreibesleaga/oscp-sdk/commit/aaf73cadda58896a13e3cbc3c590cad1f825e231))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([643bf8a](https://github.com/andreibesleaga/oscp-sdk/commit/643bf8abe4478e8a75425aacc781e1d8381b0c50))
* **mcp:** fix bug in header handling ([88d446c](https://github.com/andreibesleaga/oscp-sdk/commit/88d446cdb02bba54c4b955016c6d022c45309250))
* **mcp:** include required section for top-level properties and support naming transformations ([280a88c](https://github.com/andreibesleaga/oscp-sdk/commit/280a88c69cab321aa96ba7b81984713193b1873f))
* **mcp:** reverse validJson capability option and limit scope ([e75bd19](https://github.com/andreibesleaga/oscp-sdk/commit/e75bd19264c02b4c6bbd1d76e2d66d9fd0e6d705))
* **mcp:** support jq filtering on cloudflare workers ([241188c](https://github.com/andreibesleaga/oscp-sdk/commit/241188cdd170c9df61a3966df98acd6424252dd0))


### Chores

* **internal:** codegen related update ([58481db](https://github.com/andreibesleaga/oscp-sdk/commit/58481db508532e136296f3ace8193fe4ebc97c16))
* **internal:** move publish config ([21a3e7a](https://github.com/andreibesleaga/oscp-sdk/commit/21a3e7afe5c4c6218b215a7219884c6139fa009d))
* **internal:** remove redundant imports config ([2b46c50](https://github.com/andreibesleaga/oscp-sdk/commit/2b46c503036d2f3a2c60f400f073cf7590d87fe1))
* **mcp:** formatting ([c2b08ea](https://github.com/andreibesleaga/oscp-sdk/commit/c2b08ea5b905112e09414433e2a6e09df9310ce6))
* **mcp:** refactor streamable http transport ([5fe7bc1](https://github.com/andreibesleaga/oscp-sdk/commit/5fe7bc1611bac0066c5124d99f19470ae988208b))
* **mcp:** rework imports in tools ([d6977d8](https://github.com/andreibesleaga/oscp-sdk/commit/d6977d82fc7e53d60cd55b14fba9848330c10440))
* **ts:** reorder package.json imports ([498fc80](https://github.com/andreibesleaga/oscp-sdk/commit/498fc802550a7dda27fd839d4754fbff6c2d646d))

## 0.2.0-beta (2025-07-12)

Full Changelog: [v0.1.5-beta...v0.2.0-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.1.5-beta...v0.2.0-beta)

### Features

* **api:** update via SDK Studio ([9fbd12b](https://github.com/andreibesleaga/oscp-sdk/commit/9fbd12be8fdb582469cf5add9be2c4ae3fc43375))

## 0.1.5-beta (2025-07-12)

Full Changelog: [v0.1.4-beta...v0.1.5-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.1.4-beta...v0.1.5-beta)

## 0.1.4-beta (2025-07-12)

Full Changelog: [v0.1.3-beta...v0.1.4-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.1.3-beta...v0.1.4-beta)

### Chores

* sync repo ([cdefd8a](https://github.com/andreibesleaga/oscp-sdk/commit/cdefd8a29c89b41196821f779845a443c42302a6))
* sync repo ([2d36a04](https://github.com/andreibesleaga/oscp-sdk/commit/2d36a041fa58bf2c45f50ab20ab2388eee054c43))
* update SDK settings ([4ae97f7](https://github.com/andreibesleaga/oscp-sdk/commit/4ae97f79ea33b713cd4fbefa638d6fb017e1d904))
* update SDK settings ([1523d7f](https://github.com/andreibesleaga/oscp-sdk/commit/1523d7fd32b39f408139eb2147ac5ebf5d8cb6c5))

## 0.1.3-beta (2025-07-12)

Full Changelog: [v0.1.0-beta...v0.1.3-beta](https://github.com/andreibesleaga/oscp-sdk/compare/v0.1.0-beta...v0.1.3-beta)

### Chores

* sync repo ([cdefd8a](https://github.com/andreibesleaga/oscp-sdk/commit/cdefd8a29c89b41196821f779845a443c42302a6))
* update SDK settings ([4ae97f7](https://github.com/andreibesleaga/oscp-sdk/commit/4ae97f79ea33b713cd4fbefa638d6fb017e1d904))
