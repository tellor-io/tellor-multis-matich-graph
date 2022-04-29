import {
  Contract,
  DailyLimitChange,
  Confirmation,
  Revocation,
  Submission,
  Execution,
  ExecutionFailure,
  Deposit,
  OwnerAddition,
  OwnerRemoval,
  RequirementChange
} from "../generated/Contract/Contract"
import { 
  DailyLimitChangeEntity, 
  ConfirmationEntity, 
  RevocationEntity,
  SubmissionEntity,
  ExecutionEntity,
  ExecutionFailureEntity,
  DepositEntity,
  OwnerAdditionEntity,
  OwnerRemovalEntity,
  RequirementChangeEntity
} from "../generated/schema"

export function handleDailyLimitChange(event: DailyLimitChange): void {
  let entity = new DailyLimitChangeEntity(event.block.timestamp.toHex());
  entity.timestamp = event.block.timestamp;
  entity.dailyLimit = event.params.dailyLimit;
  entity.save();
}

export function handleConfirmation(event: Confirmation): void {
  let confirmation = new ConfirmationEntity(event.block.timestamp.toHex());
  let contract = Contract.bind(event.address);
  let transaction = contract.transactions(event.params.transactionId);

  confirmation.sender = event.params.sender.toHex();
  let receiver = event.transaction.to;
  if(receiver) {
    confirmation.receiver = receiver;
  }
  confirmation.destination = transaction.value0;
  confirmation.value = transaction.value1;
  confirmation.data = transaction.value2;
  confirmation.executed = transaction.value3;
  confirmation.gasLimit = event.transaction.gasLimit;
  confirmation.gasPrice = event.transaction.gasPrice;
  confirmation.gasUsed = event.block.gasUsed;
  confirmation.timestamp = event.block.timestamp;
  confirmation.blockNumber = event.block.number;
  confirmation.txnHash = event.transaction.hash;
  confirmation.txnId = event.params.transactionId;
  confirmation.save();

  // The following functions can then be called on this contract to access
  // state variables and other data:
  //let contract = Contract.bind(event.address)
  // - contract.owners(...)
  // - contract.isOwner(...)
  // - contract.confirmations(...)
  // - contract.calcMaxWithdraw(...)
  // - contract.getTransactionCount(...)
  // - contract.dailyLimit(...)
  // - contract.lastDay(...)
  // - contract.isConfirmed(...)
  // - contract.getConfirmationCount(...)
  // - contract.transactions(...)
  // - contract.getOwners(...)
  // - contract.getTransactionIds(...)
  // - contract.getConfirmations(...)
  // - contract.transactionCount(...)
  // - contract.submitTransaction(...)
  // - contract.MAX_OWNER_COUNT(...)
  // - contract.required(...)
  // - contract.spentToday(...)
}

export function handleRevocation(event: Revocation): void {
  let revocation = new RevocationEntity(event.block.timestamp.toHex());
  let contract = Contract.bind(event.address)
  let transaction = contract.transactions(event.params.transactionId);

  revocation.sender = event.params.sender.toHex();
  let receiver = event.transaction.to;
  if(receiver) {
    revocation.receiver = receiver;
  }
  revocation.destination = transaction.value0;
  revocation.value = transaction.value1;
  revocation.data = transaction.value2;
  revocation.executed = transaction.value3;
  revocation.gasLimit = event.transaction.gasLimit;
  revocation.gasPrice = event.transaction.gasPrice;
  revocation.gasUsed = event.block.gasUsed;
  revocation.timestamp = event.block.timestamp;
  revocation.blockNumber = event.block.number;
  revocation.txnHash = event.transaction.hash;
  revocation.txnId = event.params.transactionId;
  revocation.save();
}

export function handleSubmission(event: Submission): void {
  let submission = new SubmissionEntity(event.block.timestamp.toHex());
  let contract = Contract.bind(event.address)
  let transaction = contract.transactions(event.params.transactionId);

  submission.sender = event.transaction.from.toHex();
  let receiver = event.transaction.to;
  if(receiver) {
    submission.receiver = receiver;
  }
  submission.destination = transaction.value0;
  submission.value = transaction.value1;
  submission.data = transaction.value2;
  submission.executed = transaction.value3;
  submission.gasLimit = event.transaction.gasLimit;
  submission.gasPrice = event.transaction.gasPrice;
  submission.gasUsed = event.block.gasUsed;
  submission.timestamp = event.block.timestamp;
  submission.blockNumber = event.block.number;
  submission.txnHash = event.transaction.hash;
  submission.txnId = event.params.transactionId;
  submission.save();
}

export function handleExecution(event: Execution): void {
  let execution = new ExecutionEntity(event.block.timestamp.toHex());
  let contract = Contract.bind(event.address)
  let transaction = contract.transactions(event.params.transactionId);

  execution.sender = event.transaction.from.toHex();
  let receiver = event.transaction.to;
  if(receiver) {
    execution.receiver = receiver;
  }
  execution.destination = transaction.value0;
  execution.value = transaction.value1;
  execution.data = transaction.value2;
  execution.executed = transaction.value3;
  execution.gasLimit = event.transaction.gasLimit;
  execution.gasPrice = event.transaction.gasPrice;
  execution.gasUsed = event.block.gasUsed;
  execution.timestamp = event.block.timestamp;
  execution.blockNumber = event.block.number;
  execution.txnHash = event.transaction.hash;
  execution.txnId = event.params.transactionId;
  execution.save();
}

export function handleExecutionFailure(event: ExecutionFailure): void {
  let executionFailure = new ExecutionFailureEntity(event.block.timestamp.toHex());
  let contract = Contract.bind(event.address)
  let transaction = contract.transactions(event.params.transactionId);

  executionFailure.sender = event.transaction.from.toHex();
  let receiver = event.transaction.to;
  if(receiver) {
    executionFailure.receiver = receiver;
  }
  executionFailure.destination = transaction.value0;
  executionFailure.value = transaction.value1;
  executionFailure.data = transaction.value2;
  executionFailure.executed = transaction.value3;
  executionFailure.gasLimit = event.transaction.gasLimit;
  executionFailure.gasPrice = event.transaction.gasPrice;
  executionFailure.gasUsed = event.block.gasUsed;
  executionFailure.timestamp = event.block.timestamp;
  executionFailure.blockNumber = event.block.number;
  executionFailure.txnHash = event.transaction.hash;
  executionFailure.txnId = event.params.transactionId;
  executionFailure.save();
}

export function handleDeposit(event: Deposit): void {
  let deposit = new DepositEntity(event.block.timestamp.toHex());
  deposit.sender = event.params.sender.toHex();
  let receiver = event.transaction.to;
  if(receiver) {
    deposit.receiver = receiver;
  }
  deposit.gasLimit = event.transaction.gasLimit;
  deposit.gasPrice = event.transaction.gasPrice;
  deposit.gasUsed = event.block.gasUsed;
  deposit.timestamp = event.block.timestamp;
  deposit.blockNumber = event.block.number;
  deposit.txnHash = event.transaction.hash;
  deposit.value = event.params.value;
  deposit.save();
}

export function handleOwnerAddition(event: OwnerAddition): void {
  let ownerAddition = new OwnerAdditionEntity(event.block.timestamp.toHex());
  let contract = Contract.bind(event.address)
  let owners = contract.getOwners();
  let ownersArray: string[] = [];
  for(let i = 0; i < owners.length; i++) {
    ownersArray.push(owners[i].toHex());
  }
  ownerAddition.owners = ownersArray;
  ownerAddition.timestamp = event.block.timestamp;
  ownerAddition.ownerAddress = event.params.owner.toHex();
  ownerAddition.save();
}

export function handleOwnerRemoval(event: OwnerRemoval): void {
  let ownerRemoval = new OwnerRemovalEntity(event.block.timestamp.toHex());
  let contract = Contract.bind(event.address)
  let owners = contract.getOwners();
  let ownersArray: string[] = [];
  for(let i = 0; i < owners.length; i++) {
    ownersArray.push(owners[i].toHex());
  }
  ownerRemoval.owners = ownersArray;
  ownerRemoval.timestamp = event.block.timestamp;
  ownerRemoval.ownerAddress = event.params.owner.toHex();
  ownerRemoval.save();
}

export function handleRequirementChange(event: RequirementChange): void {
  let requirementChange = new RequirementChangeEntity(event.block.timestamp.toHex());
  requirementChange.timestamp = event.block.timestamp;
  requirementChange.requiredSignatures = event.params.required;
  requirementChange.save();
}
